const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialiser Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });

// Route test
app.get('/', (req, res) => {
  res.json({
    message: '✅ AI Compliance API is running!',
    status: 'OK',
    features: ['AI Act Analysis', 'GDPR Compliance Check'],
    timestamp: new Date().toISOString()
  });
});

// Route pour analyser un texte - MODE SIMULATION POUR DÉMO
app.post('/api/analyze', async (req, res) => {
  try {
    const { text, companyName } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

       // Analyse simulée - CORRIGÉE
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

AVERTISSEMENT :
Cette analyse est une simulation pour démonstration.
Pour une analyse juridique complète, consultez un expert.

${'='.repeat(50)}
RESSOURCES :
- AI Act UE : https://digital-strategy.ec.europa.eu
- CNIL France : https://www.cnil.fr
`;
    res.json({
      success: true,
      analysis: simulatedAnalysis,
      simulated: true,  // On indique que c'est simulé
      analyzedAt: new Date().toISOString(),
      company: companyName || 'Non spécifié',
      model: "Simulation Mode v1.0",
      note: "L'intégration Gemini AI sera activée dans la version finale"
    });

  } catch (error) {
    console.error('Erreur:', error);
    // Même en cas d'erreur, on retourne une simulation
    res.json({
      success: true,
      analysis: "ANALYSE SIMULÉE POUR DÉMO\n\nCette fonctionnalité utilise l'IA pour analyser la conformité AI Act.\n\nMode simulation activé.\n\nRecommandations standard :\n1. Audit de conformité\n2. Documentation des algorithmes\n3. Évaluation d'impact RGPD",
      simulated: true,
      analyzedAt: new Date().toISOString()
    });
  }
});

// Route santé
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    gemini: process.env.GEMINI_API_KEY ? 'configured' : 'not configured',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log(`🚀 AI Compliance API running on http://localhost:${PORT}`);
  console.log(`🤖 Gemini AI: ${process.env.GEMINI_API_KEY ? '✅ Ready' : '❌ No API Key'}`);
  console.log('='.repeat(50));
  console.log('Endpoints:');
  console.log(`  GET  /           - API status`);
  console.log(`  GET  /health     - Health check`);
  console.log(`  POST /api/analyze - Analyze text`);
  console.log('='.repeat(50));
});