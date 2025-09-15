import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';

// Load environment variables from server/.env (for local development)
dotenv.config({ path: './.env' });

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://adeel-portfolio.vercel.app'] }));
app.use(express.json());

// Initialize Gemini AI with API key from environment variables
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('Error: GEMINI_API_KEY not found. Ensure it is set in server/.env (local) or Vercel environment variables (production).');
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

app.post('/api/chat', async (req, res) => {
  if (!genAI) {
    return res.status(500).json({ error: 'Server configuration error: Missing GEMINI_API_KEY' });
  }

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