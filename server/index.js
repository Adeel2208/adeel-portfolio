const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');

// Load environment variables from server/.env
dotenv.config({ path: './.env' });

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://your-project.vercel.app'] })); // Restrict to your frontend
app.use(express.json());

// Initialize Gemini AI with API key from server/.env
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY not found in server/.env');
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/api/chat', async (req, res) => {
  try {
    const { message, knowledgeBase, conversationHistory } = req.body;

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
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

    res.json({ response });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: error.message || 'Error generating response' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));