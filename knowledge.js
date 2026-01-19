// knowledge.js
const knowledgeBase = {
  "ai_act_article_5": {
    id: "ai_act_article_5",
    law: "AI Act",
    title: "Systèmes d'IA interdits",
    content: "Les pratiques d'IA suivantes sont interdites : la sublimation ou la manipulation des comportements, l'exploitation des vulnérabilités, la surveillance généralisée, le scoring social par les autorités publiques. Ces systèmes sont considérés comme présentant un risque inacceptable pour la sécurité, les moyens de subsistance et les droits des personnes.",
    category: "Interdiction",
    importance: "haute"
  },
  "ai_act_article_6": {
    id: "ai_act_article_6",
    law: "AI Act", 
    title: "Classification des systèmes d'IA à haut risque",
    content: "Classification en 4 catégories de risque : 1) Risque inacceptable (interdiction), 2) Risque élevé (conformité stricte + évaluation), 3) Risque limité (transparence obligatoire), 4) Risque minime (pas de régulation spécifique). Les systèmes de recrutement, crédit scoring, et justice pénale sont généralement classés haut risque.",
    category: "Classification",
    importance: "haute"
  },
  "rgpd_article_22": {
    id: "rgpd_article_22",
    law: "RGPD",
    title: "Décision individuelle automatisée",
    content: "Toute personne a le droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé, y compris le profilage, produisant des effets juridiques la concernant ou l'affectant de manière significative. Des exceptions existent avec des garanties appropriées (consentement explicite, contrat).",
    category: "Droits des personnes",
    importance: "moyenne"
  },
  "rgpd_article_9": {
    id: "rgpd_article_9",
    law: "RGPD",
    title: "Traitement des catégories particulières de données",
    content: "Le traitement des données personnelles révélant l'origine raciale ou ethnique, les opinions politiques, les convictions religieuses ou philosophiques, l'appartenance syndicale, ainsi que le traitement des données génétiques, des données biométriques aux fins d'identifier une personne physique de manière unique, des données concernant la santé ou des données concernant la vie sexuelle ou l'orientation sexuelle d'une personne physique est interdit, sauf exceptions spécifiques énumérées.",
    category: "Données sensibles",
    importance: "haute"
  },
  "ai_act_article_13": {
    id: "ai_act_article_13",
    law: "AI Act",
    title: "Documentation technique",
    content: "Les fournisseurs de systèmes d'IA à haut risque doivent établir une documentation technique complète avant la mise sur le marché. Cette documentation doit permettre aux autorités d'évaluer la conformité du système avec les exigences du règlement AI Act.",
    category: "Conformité technique",
    importance: "moyenne"
  },
  "rgpd_article_5": {
    id: "rgpd_article_5",
    law: "RGPD",
    title: "Principes relatifs au traitement des données",
    content: "Les données personnelles doivent être : traitées de manière licite, loyale et transparente ; collectées pour des finalités déterminées, explicites et légitimes ; adéquates, pertinentes et limitées ; exactes et tenues à jour ; conservées sous une forme permettant l'identification des personnes pendant une durée n'excédant pas celle nécessaire ; traitées de manière à garantir une sécurité appropriée.",
    category: "Principes fondamentaux",
    importance: "haute"
  }
};

function getArticleById(id) {
  return knowledgeBase[id] || {
    id: "not_found",
    law: "Information",
    title: "Article non trouvé",
    content: "Les informations détaillées sur cet article seront bientôt disponibles dans notre base de connaissances mise à jour régulièrement.",
    category: "À venir",
    importance: "basse"
  };
}

function findRelevantArticles(text) {
  const textLower = text.toLowerCase();
  const detected = [];
  
  // Détection intelligente
  const rules = [
    {
      keywords: ['reconnaissance faciale', 'surveillance', 'biométrie'],
      articles: ['ai_act_article_5', 'rgpd_article_9']
    },
    {
      keywords: ['recrutement', 'embauche', 'cv', 'candidat'],
      articles: ['ai_act_article_6', 'rgpd_article_22', 'rgpd_article_5']
    },
    {
      keywords: ['santé', 'médical', 'diagnostic', 'patient'],
      articles: ['rgpd_article_9', 'ai_act_article_6', 'rgpd_article_5']
    },
    {
      keywords: ['finance', 'crédit', 'scoring', 'prêt'],
      articles: ['ai_act_article_6', 'rgpd_article_22']
    },
    {
      keywords: ['documentation', 'technique', 'conformité'],
      articles: ['ai_act_article_13', 'rgpd_article_5']
    },
    {
      keywords: ['donnée personnelle', 'vie privée', 'rgpd'],
      articles: ['rgpd_article_5', 'rgpd_article_9']
    }
  ];
  
  rules.forEach(rule => {
    const hasKeyword = rule.keywords.some(keyword => textLower.includes(keyword));
    if (hasKeyword) {
      rule.articles.forEach(articleId => {
        if (!detected.includes(articleId)) detected.push(articleId);
      });
    }
  });
  
  // Limiter à 3 articles max pour ne pas submerger
  return detected.slice(0, 3).map(id => getArticleById(id));
}

function showRelevantRegulations(analysisText) {
  const relevant = findRelevantArticles(analysisText);
  
  if (relevant.length === 0) return '';
  
  return `
    <div class="knowledge-section">
      <h4 style="
        margin-bottom: 20px;
        color: #1e293b;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e2e8f0;
      ">
        <i class="fas fa-gavel" style="color: #2563eb;"></i>
        Références juridiques pertinentes
      </h4>
      
      <div style="display: grid; gap: 15px;">
        ${relevant.map(article => `
          <div class="article-card" style="
            background: white;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s;
            cursor: pointer;
          " onclick="showFullArticle('${article.id}')"
             onmouseover="this.style.borderColor='#2563eb'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(37, 99, 235, 0.1)'"
             onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
              <div>
                <div style="
                  display: inline-block;
                  background: ${article.importance === 'haute' ? '#fee2e2' : article.importance === 'moyenne' ? '#fef3c7' : '#dbeafe'};
                  color: ${article.importance === 'haute' ? '#dc2626' : article.importance === 'moyenne' ? '#d97706' : '#2563eb'};
                  padding: 4px 12px;
                  border-radius: 20px;
                  font-size: 12px;
                  font-weight: 600;
                  margin-bottom: 8px;
                ">
                  ${article.category.toUpperCase()}
                </div>
                <div style="font-weight: bold; color: #1e293b; font-size: 16px;">
                  ${article.law} - ${article.title}
                </div>
              </div>
              <div style="
                width: 30px;
                height: 30px;
                background: #2563eb;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
              ">
                <i class="fas fa-external-link-alt"></i>
              </div>
            </div>
            
            <div style="color: #475569; line-height: 1.5; margin-top: 10px; font-size: 14px;">
              ${article.content.substring(0, 140)}...
            </div>
            
            <div style="
              margin-top: 15px;
              padding-top: 15px;
              border-top: 1px dashed #e2e8f0;
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
              <span style="font-size: 12px; color: #94a3b8;">
                <i class="fas fa-info-circle"></i> Cliquez pour lire l'article complet
              </span>
              <span style="
                background: #2563eb;
                color: white;
                padding: 4px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 500;
              ">
                ${article.importance === 'haute' ? '⚠️ HAUTE IMPORTANCE' : '📄 À CONNAÎTRE'}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div style="
        margin-top: 20px;
        padding: 15px;
        background: #f8fafc;
        border-radius: 8px;
        font-size: 14px;
        color: #64748b;
        display: flex;
        align-items: center;
        gap: 10px;
      ">
        <i class="fas fa-lightbulb" style="color: #f59e0b; font-size: 16px;"></i>
        <span>
          <strong>Conseil :</strong> Ces références sont fournies à titre informatif. 
          Consultez toujours un expert juridique pour une analyse complète.
        </span>
      </div>
    </div>
  `;
}

function showFullArticle(articleId) {
  const article = getArticleById(articleId);
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    padding: 20px;
    animation: fadeIn 0.3s ease;
  `;
  
  modal.innerHTML = `
    <div style="
      background: white;
      padding: 40px;
      border-radius: 20px;
      max-width: 700px;
      max-height: 85vh;
      overflow-y: auto;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      position: relative;
      animation: slideUp 0.4s ease;
    ">
      <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" 
              style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #64748b;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
              " 
              onmouseover="this.style.backgroundColor='#f1f5f9'; this.style.color='#1e293b'"
              onmouseout="this.style.backgroundColor='transparent'; this.style.color='#64748b'">
        ×
      </button>
      
      <div style="margin-bottom: 25px;">
        <div style="
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 15px;
        ">
          ${article.law}
        </div>
        <h3 style="
          color: #1e293b;
          margin: 10px 0;
          font-size: 24px;
          line-height: 1.3;
        ">
          ${article.title}
        </h3>
        <div style="color: #64748b; font-size: 14px;">
          Catégorie : <strong>${article.category}</strong> • 
          Importance : <strong>${article.importance.toUpperCase()}</strong>
        </div>
      </div>
      
      <div style="
        background: #f8fafc;
        padding: 25px;
        border-radius: 12px;
        margin: 25px 0;
        border-left: 4px solid #2563eb;
      ">
        <div style="color: #1e293b; line-height: 1.6; font-size: 15px;">
          ${article.content}
        </div>
      </div>
      
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
        border-top: 1px solid #e2e8f0;
      ">
        <div style="color: #94a3b8; font-size: 13px;">
          <i class="fas fa-clock"></i> Article référencé dans notre base de connaissances
        </div>
        <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" 
                style="
                  background: #2563eb;
                  color: white;
                  border: none;
                  padding: 10px 25px;
                  border-radius: 8px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: background 0.3s;
                "
                onmouseover="this.style.backgroundColor='#1d4ed8'"
                onmouseout="this.style.backgroundColor='#2563eb'">
          <i class="fas fa-check"></i> Compris
        </button>
      </div>
    </div>
    
    <style>
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(20px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `;
  
  document.body.appendChild(modal);
  modal.onclick = function(e) {
    if (e.target === modal) modal.remove();
  };
}

// Exposer les fonctions globalement
window.showRelevantRegulations = showRelevantRegulations;
window.showFullArticle = showFullArticle;
window.getArticleById = getArticleById;