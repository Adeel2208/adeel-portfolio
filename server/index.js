const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const winston = require('winston');

// Load environment variables from server/.env (for local development)
dotenv.config({ path: './.env' });

// Initialize logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

const app = express();

// Configure CORS
app.use(cors({
  origin: ['http://localhost:5173', 'https://adeel-portfolio.vercel.app'], // Update with your Vercel domain
  methods: ['POST', 'GET'],
  credentials: true
}));

// Parse JSON requests
app.use(express.json());

// Apply rate limiting to /api/chat
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/chat', apiLimiter);

// Initialize Gemini AI with API key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  logger.error('GEMINI_API_KEY not found. Ensure it is set in server/.env (local) or Vercel environment variables (production).');
  if (process.env.NODE_ENV !== 'production') {
    throw new Error('Missing GEMINI_API_KEY');
  }
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  if (!genAI) {
    logger.error('Server configuration error: Missing GEMINI_API_KEY');
    return res.status(500).json({ error: 'Server configuration error: Missing GEMINI_API_KEY' });
  }

  try {
    logger.info('Received /api/chat request', { body: req.body });
    const { message, knowledgeBase, conversationHistory } = req.body;

    // Validate request body
    if (!message || !knowledgeBase || !Array.isArray(conversationHistory)) {
      logger.warn('Invalid request body', { body: req.body });
      return res.status(400).json({ error: 'Missing or invalid message, knowledgeBase, or conversationHistory' });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash', // Updated to a valid model
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 1000,
      },
    });

    const context = `You are Adeel Mukhtar. Respond as yourself based ONLY on the information provided below. Be friendly and conversational.

MY INFORMATION:
${knowledgeBase}

CONVERSATION CONTEXT:
${conversationHistory.map(msg => `${msg.role.toUpperCase()}: ${msg.content}`).join('\n')}

VISITOR'S MESSAGE: ${message}

Respond as Adeel based only on the information above:`;

    const result = await model.generateContent(context);
    const response = result.response.text();
    logger.info('Generated response', { response: response.substring(0, 50) + '...' });
    res.json({ response });
  } catch (error) {
    logger.error('Gemini API Error', { error: error.message });
    res.status(500).json({ error: error.message || 'Error generating response' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Server error', { error: err.message, stack: err.stack });
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

// Handle port conflict
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    logger.error(`Port ${PORT} is already in use. Try a different port or kill the process using it. Run 'netstat -aon | findstr :${PORT}' to find the process ID and 'taskkill /PID <PID> /F' to terminate it.`);
    process.exit(1);
  } else {
    logger.error('Server error', { error: error.message });
    throw error;
  }
});