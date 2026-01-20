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

// ANALYSE - Route principale
app.post('/api/analyze', async (req, res) => {
  try {
    const { text, companyName } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    // 1. ESSAYE GROQ SI CLÉ DISPONIBLE
    if (process.env.GROQ_API_KEY) {
      try {
        console.log('🤖 Appel Groq API...');
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: "llama3-70b-8192",
            messages: [
              {
                role: "system",
                content: "Tu es un expert français en conformité AI Act (Règlement européen sur l'IA) et RGPD. Tu analyses des systèmes d'IA pour identifier les risques de conformité. Fournis une analyse STRUCTURÉE en français avec : 1) Niveau de risque 2) Articles concernés 3) Recommandations concrètes 4) Échéances. Sois professionnel et précis."
              },
              {
                role: "user",
                content: `ENTREPRISE: ${companyName || 'Non spécifiée'}\n\nSYSTÈME IA À ANALYSER:\n"${text}"\n\nFournis un rapport de conformité AI Act & RGPD détaillé.`
              }
            ],
            temperature: 0.3,
            max_tokens: 2000,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('✅ Analyse Groq réussie');
          return res.json({
            success: true,
            analysis: data.choices[0].message.content,
            ai_model: 'groq-llama3-70b',
            analyzedAt: new Date().toISOString(),
            company: companyName || 'Non spécifié',
            tokens: data.usage.total_tokens
          });
        }
      } catch (apiError) {
        console.log('Groq API error:', apiError.message);
        // Continue vers la simulation
      }
    }

    // 2. SIMULATION (fallback)
    console.log('🔄 Mode simulation (fallback)');
    const simulatedAnalysis = `
ANALYSE AI ACT & RGPD - RAPPORT
${'='.repeat(50)}

ENTREPRISE : ${companyName || 'Non spécifiée'}
DATE : ${new Date().toLocaleDateString('fr-FR')}
HEURE : ${new Date().toLocaleTimeString('fr-FR')}

TEXTE ANALYSÉ :
"${text.length > 100 ? text.substring(0, 100) + '...' : text}"

${'-'.repeat(50)}

RISQUES IDENTIFIÉS :

1. NIVEAU DE RISQUE : MOYEN à ÉLEVÉ
2. CATÉGORIE AI ACT : Système à risque limité
3. DONNÉES CONCERNÉES : Données personnelles potentielles
4. IMPACT RGPD : Articles 5, 6, 9

ARTICLES AI ACT APPLICABLES :

- Article 6 - Classification des systèmes IA
- Article 10 - Exigences de transparence
- Article 13 - Documentation technique obligatoire
- Article 22 - Droit à l'explication (RGPD)

RECOMMANDATIONS DE CONFORMITÉ :

1. ÉVALUATION D'IMPACT : Réaliser une DPIA
2. DOCUMENTATION : Documentation technique complète
3. TRANSPARENCE : Informer les utilisateurs
4. SUPERVISION : Mécanisme de supervision humaine
5. AUDIT : Audit trimestriel des algorithmes

ÉCHÉANCES RECOMMANDÉES :

- Court terme (1 mois) : Documentation initiale
- Moyen terme (3 mois) : Mise en conformité RGPD
- Long terme (6 mois) : Conformité totale AI Act

${'='.repeat(50)}
`;

    res.json({
      success: true,
      analysis: simulatedAnalysis,
      simulated: true,
      analyzedAt: new Date().toISOString(),
      company: companyName || 'Non spécifié'
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

// Démarrer le serveur
try {
  const server = app.listen(PORT, () => {
    const actualPort = server.address().port;
    console.log('='.repeat(50));
    console.log(`🚀 AI Compliance API running on port ${actualPort}`);
    console.log(`🌐 Local URL: http://localhost:${actualPort}`);
    console.log(`🌐 Render URL: https://clarity-ai-4zhg.onrender.com`);
    console.log(`🤖 Groq AI: ${process.env.GROQ_API_KEY ? '✅ Ready' : '❌ No API Key'}`);
    console.log('='.repeat(50));
    console.log('Endpoints:');
    console.log(`  GET  http://localhost:${actualPort}/           - API status`);
    console.log(`  GET  http://localhost:${actualPort}/health     - Health check`);
    console.log(`  GET  http://localhost:${actualPort}/test-key   - Test API key`);
    console.log(`  POST http://localhost:${actualPort}/api/analyze - Analyze text`);
    console.log('='.repeat(50));
  });
  
  server.on('error', (error) => {
    console.error('❌ Server error:', error);
    process.exit(1);
  });
  
} catch (error) {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
}
