const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
  origin: [
    'https://romaincurto42-jpg.github.io',
    'http://localhost:3000',
    'https://clarity-ai-4zhg.onrender.com'
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    groq: process.env.GROQ_API_KEY ? '✅ configured' : '❌ not configured',
    deepseek: process.env.DEEPSEEK_API_KEY ? '✅ configured' : '❌ not configured',
    timestamp: new Date().toISOString(),
    endpoints: ['/', '/health', '/test-key', '/api/analyze']
  });
});

app.get('/test-key', (req, res) => {
  const hasGroqKey = !!process.env.GROQ_API_KEY;
  const hasDeepSeekKey = !!process.env.DEEPSEEK_API_KEY;
  
  const groqPreview = process.env.GROQ_API_KEY 
    ? process.env.GROQ_API_KEY.substring(0, 10) + '...' 
    : 'NO KEY';
    
  const deepseekPreview = process.env.DEEPSEEK_API_KEY 
    ? process.env.DEEPSEEK_API_KEY.substring(0, 10) + '...' 
    : 'NO KEY';
    
  res.json({
    groq: {
      configured: hasGroqKey,
      preview: groqPreview,
      message: hasGroqKey ? '✅ Clé Groq détectée' : '❌ Pas de clé Groq'
    },
    deepseek: {
      configured: hasDeepSeekKey,
      preview: deepseekPreview,
      message: hasDeepSeekKey ? '✅ Clé DeepSeek détectée' : '❌ Pas de clé DeepSeek'
    },
    timestamp: new Date().toISOString()
  });
});
