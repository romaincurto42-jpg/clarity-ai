// ==================== MODULE DPIA ====================

// Ajoute le CSS pour les améliorations DPIA
const dpiaCSS = `
/* Styles DPIA améliorés */
.dpia-enhanced-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    padding: 25px;
    margin: 20px 0;
    border: 1px solid #e2e8f0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Métadonnées en haut */
.dpia-metadata {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #f1f5f9;
    margin-bottom: 25px;
    flex-wrap: wrap;
    gap: 15px;
}

/* Badge du template */
.dpia-badge {
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.dpia-badge.high-risk { background: #fee2e2; color: #dc2626; border: 1px solid #fecaca; }
.dpia-badge.medium-risk { background: #fef3c7; color: #d97706; border: 1px solid #fde68a; }
.dpia-badge.low-risk { background: #dcfce7; color: #16a34a; border: 1px solid #bbf7d0; }

/* Statistiques */
.dpia-stats {
    display: flex;
    gap: 15px;
    font-size: 13px;
    color: #64748b;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #f8fafc;
    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
}

/* Layout principal avec sidebar */
.dpia-content-wrapper {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 30px;
    min-height: 500px;
}

@media (max-width: 900px) {
    .dpia-content-wrapper {
        grid-template-columns: 1fr;
    }
}

/* Sidebar de navigation */
.dpia-sidebar {
    background: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    height: fit-content;
    position: sticky;
    top: 20px;
    border: 1px solid #e2e8f0;
}

.dpia-sidebar h4 {
    margin-top: 0;
    color: #334155;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
}

.dpia-sidebar ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.dpia-sidebar li {
    margin: 8px 0;
    padding-left: 0;
}

.dpia-sidebar a {
    color: #475569;
    text-decoration: none;
    font-size: 14px;
    display: block;
    padding: 5px 10px;
    border-radius: 4px;
    transition: all 0.2s;
}

.dpia-sidebar a:hover {
    background: #e2e8f0;
    color: #3b82f6;
}

/* Boutons sidebar */
.dpia-actions-sidebar {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn-outline {
    background: white;
    border: 1px solid #d1d5db;
    color: #374151;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
}

.btn-outline:hover {
    background: #f3f4f6;
    border-color: #9ca3af;
}

/* Contenu principal */
.dpia-main-content {
    line-height: 1.7;
    color: #334155;
    font-size: 15px;
}

.dpia-main-content h4 {
    color: #1e293b;
    border-left: 4px solid #3b82f6;
    padding-left: 15px;
    margin: 30px 0 20px 0;
    font-size: 18px;
    font-weight: 600;
}

.dpia-main-content p {
    margin-bottom: 15px;
}

.dpia-main-content ul, 
.dpia-main-content ol {
    margin-left: 20px;
    margin-bottom: 15px;
}

.dpia-main-content li {
    margin-bottom: 8px;
}

/* Surlignage des termes importants */
.highlight {
    background: linear-gradient(120deg, #fef3c7 0%, #fef3c7 100%);
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 500;
}

/* Liens articles RGPD */
.article-link {
    color: #2563eb;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 500;
    background: #eff6ff;
    padding: 1px 4px;
    border-radius: 3px;
    transition: all 0.2s;
}

.article-link:hover {
    color: #1d4ed8;
    background: #dbeafe;
}

/* Boutons d'actions */
.dpia-actions-enhanced {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e2e8f0;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary, .btn-success, .btn-info {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
    font-size: 14px;
    min-width: 140px;
    justify-content: center;
}

.btn-primary { 
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); 
    color: white; 
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}
.btn-secondary { 
    background: #f1f5f9; 
    color: #475569;
    border: 1px solid #cbd5e1;
}
.btn-success { 
    background: linear-gradient(135deg, #10b981 0%, #059669 100%); 
    color: white;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
}
.btn-info { 
    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); 
    color: white;
    box-shadow: 0 2px 4px rgba(14, 165, 233, 0.3);
}

.btn-primary:hover { 
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
}
.btn-secondary:hover { 
    background: #e2e8f0; 
    transform: translateY(-1px);
}
.btn-success:hover { 
    background: linear-gradient(135deg, #059669 0%, #047857 100%); 
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(16, 185, 129, 0.4);
}
.btn-info:hover { 
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); 
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(14, 165, 233, 0.4);
}

/* Checklist de conformité */
.dpia-checklist {
    background: #f0f9ff;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
    border: 1px solid #bae6fd;
}

.dpia-checklist h4 {
    margin-top: 0;
    color: #0369a1;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
}

.checklist-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #e0f2fe;
    font-size: 14px;
}

.checklist-item:last-child {
    border-bottom: none;
}

.checklist-item.checked {
    color: #059669;
}

.checkmark {
    font-size: 18px;
    min-width: 24px;
}

.checklist-article {
    margin-left: auto;
    font-size: 12px;
    color: #64748b;
    background: #e2e8f0;
    padding: 2px 8px;
    border-radius: 10px;
}

.risk-score {
    font-size: 12px;
    background: rgba(255, 255, 255, 0.7);
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: 8px;
}

.dpia-index {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
}

.dpia-index::-webkit-scrollbar {
    width: 4px;
}

.dpia-index::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.dpia-index::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
}

.dpia-index::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}
`;

// Injecte le CSS
(function() {
    const style = document.createElement('style');
    style.textContent = dpiaCSS;
    document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Module DPIA amélioré chargé');
    setTimeout(initDPIA, 500);
});

function initDPIA() {
    console.log('🎯 Initialisation DPIA améliorée');
    initDPIAButtons();
    checkDPIAccess();
}

function initDPIAButtons() {
    // Bouton Recrutement
    const btnRecrutement = document.getElementById('btn-dpia-recrutement');
    if (btnRecrutement) {
        btnRecrutement.addEventListener('click', () => handleDPIAButtonClick('recrutement'));
    }
    
    // Bouton Santé
    const btnSante = document.getElementById('btn-dpia-sante');
    if (btnSante) {
        btnSante.addEventListener('click', () => handleDPIAButtonClick('sante'));
    }
    
    // Bouton Finance
    const btnFinance = document.getElementById('btn-dpia-finance');
    if (btnFinance) {
        btnFinance.addEventListener('click', () => handleDPIAButtonClick('finance'));
    }
    
    console.log('✅ Boutons DPIA initialisés');
}

function checkDPIAccess() {
    const user = localStorage.getItem('clarity_user');
    const dpiaTab = document.getElementById('dpia-tab');
    const dpiaSection = document.getElementById('dpia-section');
    
    if (!dpiaTab || !dpiaSection) return;
    
    if (user) {
        dpiaTab.style.display = 'inline-block';
        dpiaSection.style.display = 'none'; // Caché par défaut
    } else {
        dpiaTab.style.display = 'none';
        dpiaSection.style.display = 'none';
    }
}

// ==================== GESTION DE L'ONGLET DPIA ====================

function handleDPIANavClick() {
    console.log('📋 Onglet DPIA cliqué');
    
    // Cacher toutes les sections analyzer
    document.querySelectorAll('.analyzer').forEach(section => {
        section.style.display = 'none';
    });
    
    // Montrer seulement la section DPIA
    const dpiaSection = document.getElementById('dpia-section');
    if (dpiaSection) {
        dpiaSection.style.display = 'block';
        
        // Scroll vers la DPIA
        dpiaSection.scrollIntoView({ behavior: 'smooth' });
        
        // Réinitialiser à l'étape 1
        showDPIAStep1();
    }
}

function showHomePage() {
    console.log('🏠 Retour à l\'accueil');
    
    // Montrer toutes les sections analyzer
    document.querySelectorAll('.analyzer').forEach(section => {
        section.style.display = 'block';
    });
    
    // Cacher les étapes DPIA (sauf la section)
    const dpiaSection = document.getElementById('dpia-section');
    if (dpiaSection) {
        dpiaSection.style.display = 'none';
    }
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== SYSTÈME DE SCORING ====================

function calculateDPIAScore(templateId, responses) {
    let score = 100;
    const deductions = [];
    
    // 1. Volume
    const volume = parseInt(responses.volume) || 0;
    if (volume > 10000) {
        score -= 20;
        deductions.push("-20% : Volume très élevé (>10k/mois)");
    } else if (volume > 1000) {
        score -= 10;
        deductions.push("-10% : Volume significatif (>1k/mois)");
    }
    
    // 2. Données sensibles
    if (responses.donnees.includes('sensible') || responses.donnees.includes('santé')) {
        score -= 25;
        deductions.push("-25% : Données sensibles détectées");
    }
    
    // 3. Automatisation
    const automation = parseInt(responses.automation) || 0;
    if (automation > 90) {
        score -= 30;
        deductions.push("-30% : Automatisation très élevée (>90%)");
    } else if (automation > 70) {
        score -= 15;
        deductions.push("-15% : Automatisation élevée (>70%)");
    }
    
    // 4. Conservation
    if (responses.conservation.includes('24') || responses.conservation.includes('36')) {
        score -= 10;
        deductions.push("-10% : Durée de conservation longue");
    }
    
    // 5. Accès multiples
    if (responses.acces.length > 2) {
        score -= 15;
        deductions.push("-15% : Multiples accès aux données");
    }
    
    // Limiter le score
    score = Math.max(0, Math.min(100, score));
    
    // Déterminer le niveau
    let niveau = '';
    let couleur = '';
    
    if (score >= 80) {
        niveau = 'FAIBLE';
        couleur = '#10b981';
    } else if (score >= 60) {
        niveau = 'MODÉRÉ';
        couleur = '#f59e0b';
    } else if (score >= 40) {
        niveau = 'ÉLEVÉ';
        couleur = '#ef4444';
    } else {
        niveau = 'TRÈS ÉLEVÉ';
        couleur = '#dc2626';
    }
    
    return {
        score: Math.round(score),
        niveau: niveau,
        couleur: couleur,
        deductions: deductions
    };
}

function handleDPIAButtonClick(templateId) {
    const step1 = document.getElementById('dpia-step1');
    if (step1) step1.style.display = 'none';
    
    const step2 = document.getElementById('dpia-step2');
    if (step2) {
        step2.style.display = 'block';
        step2.innerHTML = generateDPIAForm(templateId);
    }
}

function generateDPIAForm(templateId) {
    return `
        <div style="margin-bottom: 20px;">
            <button onclick="showDPIAStep1()" style="background: none; border: none; color: #2563eb; cursor: pointer; font-size: 14px;">
                ← Retour au choix
            </button>
        </div>
        
        <h3 style="color: #1e293b; margin-bottom: 10px;">DPIA - ${templateId.toUpperCase()}</h3>
        <p style="color: #64748b; margin-bottom: 30px;">Remplissez ce formulaire pour générer votre DPIA personnalisée</p>
        
        <form id="dpia-form-${templateId}" onsubmit="generateDPIAResult('${templateId}'); return false;">
            <!-- QUESTION 1 -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <label style="display: block; font-weight: 600; color: #1e293b; margin-bottom: 10px;">
                    1. Volume de traitement mensuel ?
                </label>
                <input type="number" 
                       id="volume-${templateId}"
                       placeholder="ex: 500 traitements/mois" 
                       required
                       style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 16px;">
            </div>
            
            <!-- QUESTION 2 -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <label style="display: block; font-weight: 600; color: #1e293b; margin-bottom: 10px;">
                    2. Type de données traitées ?
                </label>
                <select id="donnees-${templateId}" required style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 16px;">
                    <option value="">-- Sélectionnez --</option>
                    <option value="identite">Données d'identité</option>
                    <option value="contact">Coordonnées de contact</option>
                    <option value="professionnel">Données professionnelles</option>
                    <option value="sensible">Données sensibles (santé, origine, etc.)</option>
                </select>
            </div>
            
            <!-- QUESTION 3 -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <label style="display: block; font-weight: 600; color: #1e293b; margin-bottom: 10px;">
                    3. Pourcentage de décision automatisée ?
                </label>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <input type="range" 
                           id="automation-${templateId}"
                           min="0" 
                           max="100" 
                           value="50" 
                           style="flex: 1;"
                           oninput="document.getElementById('auto-percent-${templateId}').textContent = this.value + '%'">
                    <span id="auto-percent-${templateId}" style="font-weight: bold; min-width: 50px;">50%</span>
                </div>
            </div>
            
            <!-- QUESTION 4 -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <label style="display: block; font-weight: 600; color: #1e293b; margin-bottom: 10px;">
                    4. Durée de conservation des données ?
                </label>
                <select id="conservation-${templateId}" required style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 16px;">
                    <option value="6">6 mois</option>
                    <option value="12" selected>12 mois</option>
                    <option value="24">24 mois</option>
                    <option value="36">36 mois ou plus</option>
                </select>
            </div>
            
            <!-- QUESTION 5 -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                <label style="display: block; font-weight: 600; color: #1e293b; margin-bottom: 10px;">
                    5. Qui a accès aux données ?
                </label>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" value="Service interne"> Service interne uniquement
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" value="Prestataires externes"> Prestataires externes
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" value="Partenaires commerciaux"> Partenaires commerciaux
                    </label>
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" value="Autorités réglementaires"> Autorités réglementaires
                    </label>
                </div>
            </div>
            
            <!-- BOUTON DE SOUMISSION -->
            <div style="text-align: center;">
                <button type="submit" 
                        style="background: #10b981; color: white; border: none; padding: 15px 40px; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px;">
                    <i class="fas fa-file-contract"></i> Générer ma DPIA complète
                </button>
            </div>
        </form>
    `;
}

function showDPIAStep1() {
    document.getElementById('dpia-step1').style.display = 'block';
    document.getElementById('dpia-step2').style.display = 'none';
    document.getElementById('dpia-step3').style.display = 'none';
}

function generateDPIAResult(templateId) {
    event.preventDefault();
    
    try {
        const step3 = document.getElementById('dpia-step3');
        // Récupérer les réponses
        const responses = {
            volume: document.getElementById(`volume-${templateId}`).value || '0',
            donnees: document.getElementById(`donnees-${templateId}`).value || 'Non spécifié',
            automation: document.getElementById(`automation-${templateId}`).value || '50',
            conservation: document.getElementById(`conservation-${templateId}`).options[
                document.getElementById(`conservation-${templateId}`).selectedIndex
            ].text,
            acces: []
        };
        
        // Récupérer les checkboxes
        const checkboxes = document.querySelectorAll(`#dpia-form-${templateId} input[type="checkbox"]:checked`);
        checkboxes.forEach(checkbox => {
            responses.acces.push(checkbox.value);
        });
        
        if (responses.acces.length === 0) {
            responses.acces = ['Non spécifié'];
        }
        
        // Calculer le score
        const scoreResult = calculateDPIAScore(templateId, responses);
        
        // Générer le résultat
        const date = new Date().toLocaleDateString('fr-FR');
        
        const dpiaHTML = `
            <div style="margin-bottom: 20px;">
                <button onclick="showDPIAStep1()" style="background: none; border: none; color: #2563eb; cursor: pointer; font-size: 14px;">
                    ← Nouvelle DPIA
                </button>
            </div>
            
            <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
                <!-- En-tête avec score -->
                <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 2px solid #e2e8f0;">
                    <div style="display: inline-block; background: ${scoreResult.couleur}; color: white; padding: 8px 20px; border-radius: 20px; margin-bottom: 15px; font-weight: 600;">
                        SCORE : ${scoreResult.score}/100 - ${scoreResult.niveau}
                    </div>
                    <h1 style="color: #1e293b; margin-bottom: 10px; font-size: 28px;">
                        DPIA - ${templateId.charAt(0).toUpperCase() + templateId.slice(1)}
                    </h1>
                    <p style="color: #64748b; margin-bottom: 5px;">
                        Document généré le ${date}
                    </p>
                </div>
                
                <!-- Détail du score -->
                <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px;">📊 Analyse du score</h3>
                    <p style="color: #475569; margin-bottom: 10px;">
                        Votre système a obtenu un score de <strong>${scoreResult.score}/100</strong>.
                        ${scoreResult.score >= 80 ? 'Bon niveau de conformité.' : 
                          scoreResult.score >= 60 ? 'Améliorations recommandées.' : 
                          'Actions correctives nécessaires.'}
                    </p>
                    ${scoreResult.deductions.length > 0 ? `
                        <h4 style="color: #1e293b; margin-bottom: 10px;">Points d'amélioration :</h4>
                        <ul style="color: #475569; padding-left: 20px;">
                            ${scoreResult.deductions.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    ` : '<p style="color: #10b981;">✓ Aucun point critique détecté</p>'}
                </div>
                
                <!-- Vos réponses -->
                <div style="margin-bottom: 40px;">
                    <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 20px;">
                        <i class="fas fa-clipboard-check"></i> Vos réponses
                    </h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                            <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">📊 Volume</div>
                            <div style="color: #2563eb; font-weight: 500;">${responses.volume} traitements/mois</div>
                        </div>
                        
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                            <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">🔒 Données</div>
                            <div style="color: #2563eb; font-weight: 500;">${responses.donnees}</div>
                        </div>
                        
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                            <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">🤖 Automation</div>
                            <div style="color: #2563eb; font-weight: 500;">${responses.automation}%</div>
                        </div>
                        
                       <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                            <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">⏳ Conservation</div>
                            <div style="color: #2563eb; font-weight: 500;">${responses.conservation}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Recommandations -->
                <div style="background: #f0f9ff; padding: 25px; border-radius: 12px; margin-bottom: 40px;">
                    <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 18px;">
                        <i class="fas fa-check-circle"></i> Recommandations
                    </h3>
                    <ol style="color: #475569; padding-left: 20px; margin: 0; line-height: 1.6;">
                        <li>Documenter les critères de décision</li>
                        <li>Mettre en place un audit trimestriel</li>
                        <li>Informer clairement les personnes concernées</li>
                        ${scoreResult.score < 60 ? '<li>Revue complète de la conformité nécessaire</li>' : ''}
                    </ol>
                </div>
                
                <!-- Actions -->
                <div style="text-align: center; padding-top: 30px; border-top: 2px solid #e2e8f0;">
                    <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;">
                        <button onclick="downloadDPIAPDF('${templateId}')" style="background: #2563eb; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-file-pdf"></i> Télécharger PDF
                        </button>
                        <button onclick="window.print()" style="background: white; color: #2563eb; border: 2px solid #2563eb; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-print"></i> Imprimer
                        </button>
                    </div>
                </div>
            </div>
        `;
        // ========== AFFICHER LE CHARGEMENT ==========
step3.innerHTML = `
    <div style="text-align: center; padding: 50px;">
        <div style="border: 4px solid #e2e8f0; border-top: 4px solid #2563eb; border-radius: 50%; width: 40px; height: 40px; margin: 0 auto; animation: spin 1s linear infinite;"></div>
        <style>
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
        <h3 style="color: #2563eb; margin-top: 20px;">🤖 Génération de votre DPIA personnalisée avec IA...</h3>
        <p style="color: #64748b;">Analyse en cours - Cela prendra quelques secondes</p>
    </div>
`;
step3.style.display = 'block';
step3.scrollIntoView({ behavior: 'smooth' });

// ========== APPEL GROQ POUR DPIA COMPLÈTE ==========
generateDPIAWithGroq(templateId, responses, scoreResult);
// ====================================================
        
    } catch (error) {
        console.error('❌ Erreur génération DPIA:', error);
        alert('Erreur lors de la génération de la DPIA');
    }
}

// ==================== GROQ DPIA SIMPLIFIÉE ====================

async function generateDPIAWithGroq(templateId, responses, scoreResult) {
    try {
        console.log('🤖 Génération DPIA avec Groq...');
        
        // Template amélioré
        const templateInfo = {
            'recrutement': { name: 'Recrutement & RH', icon: '👥' },
            'sante': { name: 'Santé & Médical', icon: '🏥' },
            'finance': { name: 'Finance & Banque', icon: '💰' }
        }[templateId] || { name: templateId.toUpperCase(), icon: '📋' };
        
        // PROMPT AMÉLIORÉ
        const enhancedPrompt = `Génère un Document d'Impact sur la Protection des Données (DPIA) RGPD complet.

Type de système : ${templateInfo.name}
Score de risque : ${scoreResult.score}/100 (${scoreResult.niveau})

DÉTAILS :
• Volume : ${responses.volume} traitements/mois
• Données : ${responses.donnees}
• Automatisation : ${responses.automation}%
• Conservation : ${responses.conservation}
• Accès : ${responses.acces.join(', ')}

FORMAT PROFESSIONNEL :
1. Identification du traitement
2. Description détaillée
3. Base légale (Article 6 RGPD)
4. Analyse des risques
5. Mesures techniques et organisationnelles
6. Droits des personnes concernées
7. Plan d'action
8. Validation et suivi

En français, citations articles RGPD, recommandations actionnables.`;

        // Appeler l'API
        const response = await fetch('https://clarity-ai-4zhg.onrender.com/api/generate-dpia', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                template: templateId,
                responses: responses,
                score: scoreResult,
                prompt: enhancedPrompt 
            })
        });

        if (!response.ok) throw new Error('Erreur API');
        
        const data = await response.json();
        
        if (data.success && data.dpia) {
            // Utiliser la fonction displayGroqDPIA (qui existe déjà)
            displayGroqDPIA(templateId, responses, scoreResult, data.dpia, data.tokens);
        } else {
            // Fallback
            displayBasicDPIA(templateId, responses, scoreResult);
        }

    } catch (error) {
        console.error('❌ Erreur Groq DPIA:', error);
        displayBasicDPIA(templateId, responses, scoreResult);
    }
}

// ==================== FONCTIONS D'AFFICHAGE ====================

function displayGroqDPIA(templateId, responses, scoreResult, dpiaContent, tokensUsed) {
    const step3 = document.getElementById('dpia-step3');
    
    const html = `
        <div style="margin-bottom: 20px;">
            <button onclick="showDPIAStep1()" style="background: none; border: none; color: #2563eb; cursor: pointer; font-size: 14px;">
                ← Nouvelle DPIA
            </button>
        </div>
        
        <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
            <!-- En-tête -->
            <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 2px solid #e2e8f0;">
                <div style="display: inline-block; background: ${scoreResult.couleur}; color: white; padding: 8px 20px; border-radius: 20px; margin-bottom: 15px; font-weight: 600;">
                    SCORE : ${scoreResult.score}/100 - ${scoreResult.niveau}
                </div>
                <h1 style="color: #1e293b; margin-bottom: 10px; font-size: 28px;">
                    📋 DPIA COMPLÈTE - ${templateId.charAt(0).toUpperCase() + templateId.slice(1)}
                </h1>
                <div style="color: #64748b; font-size: 14px;">
                    <i class="fas fa-calendar"></i> ${new Date().toLocaleDateString('fr-FR')} | 
                    <i class="fas fa-brain"></i> Généré par IA
                </div>
            </div>
            
            <!-- Contenu Groq -->
            <div style="
                background: #f8fafc; 
                padding: 30px; 
                border-radius: 12px;
                white-space: pre-wrap;
                font-family: 'Georgia', serif;
                line-height: 1.8;
                color: #1e293b;
                border-left: 4px solid #2563eb;
                max-height: 600px;
                overflow-y: auto;
                margin-bottom: 30px;
            ">
                ${dpiaContent}
            </div>
            
            <!-- Résumé -->
            <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">📊 Votre profil</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="background: white; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">Volume</div>
                        <div style="color: #2563eb;">${responses.volume}/mois</div>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">Données</div>
                        <div style="color: #2563eb;">${responses.donnees}</div>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">Automatisation</div>
                        <div style="color: #2563eb;">${responses.automation}%</div>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">Conservation</div>
                        <div style="color: #2563eb;">${responses.conservation}</div>
                    </div>
                </div>
            </div>
            
            <!-- Boutons -->
            <div style="text-align: center; padding-top: 30px; border-top: 2px solid #e2e8f0;">
                <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap;">
                    <button onclick="downloadDPIAPDF('${templateId}')" style="background: #2563eb; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-file-pdf"></i> Télécharger PDF
                    </button>
                    <button onclick="window.print()" style="background: white; color: #2563eb; border: 2px solid #2563eb; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-print"></i> Imprimer
                    </button>
                </div>
            </div>
        </div>
    `;
    
    step3.innerHTML = html;
    
    // Sauvegarder
    const dpiaData = {
        template: templateId,
        score: scoreResult.score,
        niveau: scoreResult.niveau,
        color: scoreResult.couleur,
        responses: responses,
        groq_content: dpiaContent,
        tokens: tokensUsed
    };
    
    saveDPIAHistory(dpiaData);
}

function displayBasicDPIA(templateId, responses, scoreResult) {
    // Ton ancien code (fallback)
    const step3 = document.getElementById('dpia-step3');
    
        // Fallback simple
    const fallbackHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showDPIAStep1()" style="background: none; border: none; color: #2563eb; cursor: pointer; font-size: 14px;">
                ← Nouvelle DPIA
            </button>
        </div>
        
        <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="display: inline-block; background: ${scoreResult.couleur}; color: white; padding: 8px 20px; border-radius: 20px; margin-bottom: 15px; font-weight: 600;">
                    SCORE : ${scoreResult.score}/100 - ${scoreResult.niveau}
                </div>
                <h1 style="color: #1e293b; margin-bottom: 10px;">
                    DPIA - ${templateId.charAt(0).toUpperCase() + templateId.slice(1)}
                </h1>
                <p style="color: #64748b;">Généré le ${new Date().toLocaleDateString('fr-FR')}</p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">📊 Votre profil</h3>
                <p><strong>Volume:</strong> ${responses.volume} traitements/mois</p>
                <p><strong>Données:</strong> ${responses.donnees}</p>
                <p><strong>Automatisation:</strong> ${responses.automation}%</p>
                <p><strong>Conservation:</strong> ${responses.conservation}</p>
                <p><strong>Accès:</strong> ${responses.acces.join(', ')}</p>
            </div>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">📝 Recommandations</h3>
                <ol style="color: #475569; padding-left: 20px; margin: 0; line-height: 1.6;">
                    <li>Documenter les critères de décision</li>
                    <li>Mettre en place un audit trimestriel</li>
                    <li>Informer clairement les personnes concernées</li>
                    ${scoreResult.score < 60 ? '<li>Revue complète de la conformité nécessaire</li>' : ''}
                </ol>
            </div>
            
            <div style="text-align: center;">
                <p style="color: #64748b; font-style: italic;">
                    ⚠️ Mode fallback activé - La génération IA n'est pas disponible.
                </p>
            </div>
        </div>
    `;
    
   step3.innerHTML = fallbackHTML;
step3.style.display = 'block';
    
    const dpiaData = {
        template: templateId,
        score: scoreResult.score,
        niveau: scoreResult.niveau,
        color: scoreResult.couleur,
        responses: responses
    };
    
    saveDPIAHistory(dpiaData);
}

function downloadDPIAPDF(templateId) {
    console.log('📥 Génération PDF professionnel pour:', templateId);
    
    // 1. RÉCUPÉRER TOUT LE CONTENU
    let dpiaContent = '';
    
    // Option A : Récupérer le contenu amélioré (nouveau format)
    const enhancedContainer = document.querySelector('.dpia-enhanced-container');
    if (enhancedContainer) {
        console.log('✅ Capture du format amélioré');
        dpiaContent = enhancedContainer.outerHTML;
    } 
    // Option B : Récupérer l'ancien format
    else {
        const step3 = document.getElementById('dpia-step3');
        if (step3) {
            console.log('⚠️ Capture du format classique');
            dpiaContent = step3.innerHTML;
        } else {
            alert('❌ Impossible de trouver le contenu DPIA');
            return;
        }
    }
    
    // 2. CRÉER UNE PAGE DÉDIÉE POUR L'IMPRESSION
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    
    // 3. ÉCRIRE LE HTML COMPLET OPTIMISÉ POUR PDF
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DPIA - ${templateId.toUpperCase()}</title>
            <style>
                /* === RESET === */
                * { margin: 0; padding: 0; box-sizing: border-box; }
                
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #1e293b;
                    padding: 25px;
                    background: white;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                
                /* === EN-TÊTE PROFESSIONNEL === */
                .pdf-header {
                    text-align: center;
                    margin-bottom: 40px;
                    padding-bottom: 25px;
                    border-bottom: 4px solid #2563eb;
                }
                
                .pdf-title {
                    color: #1e293b;
                    font-size: 28px;
                    margin-bottom: 10px;
                    font-weight: 700;
                }
                
                .pdf-subtitle {
                    color: #64748b;
                    font-size: 16px;
                    margin-bottom: 15px;
                }
                
                .pdf-meta {
                    color: #475569;
                    font-size: 14px;
                    margin: 8px 0;
                }
                
                /* === CONTENU PRINCIPAL === */
                .pdf-content {
                    margin: 30px 0;
                }
                
                /* === ADAPTATION DU CONTENU DPIA POUR PDF === */
                .dpia-enhanced-container {
                    all: initial !important;
                    font-family: inherit !important;
                    background: white !important;
                    border: none !important;
                    box-shadow: none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                    overflow: visible !important;
                    display: block !important;
                }
                
                /* Cache les éléments inutiles en PDF */
                .dpia-sidebar,
                .dpia-actions-sidebar,
                .dpia-actions-enhanced,
                .btn-primary, .btn-secondary, .btn-success, .btn-info,
                .btn-outline,
                button[onclick] {
                    display: none !important;
                }
                
                /* Layout simplifié pour PDF */
                .dpia-content-wrapper {
                    display: block !important;
                    grid-template-columns: none !important;
                    gap: 0 !important;
                }
                
                /* Contenu principal visible */
                .dpia-main-content {
                    width: 100% !important;
                    max-width: 100% !important;
                    font-size: 13px !important;
                    line-height: 1.5 !important;
                    overflow: visible !important;
                    height: auto !important;
                }
                
                /* Métadonnées compactes */
                .dpia-metadata {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                    margin-bottom: 20px !important;
                    padding-bottom: 15px !important;
                    border-bottom: 2px solid #e2e8f0 !important;
                }
                
                .dpia-stats {
                    margin-top: 10px !important;
                    font-size: 11px !important;
                }
                
                /* Checklist visible */
                .dpia-checklist {
                    margin: 25px 0 !important;
                    padding: 20px !important;
                    border: 1px solid #bae6fd !important;
                    background: #f8fafc !important;
                    page-break-inside: avoid;
                }
                
                /* === OPTIMISATION POUR IMPRESSION === */
                @media print {
                    body {
                        padding: 15px !important;
                        font-size: 12px !important;
                    }
                    
                    .pdf-title {
                        font-size: 24px !important;
                    }
                    
                    .no-print {
                        display: none !important;
                    }
                    
                    /* Évite les coupures dans les titres */
                    h4, h5 {
                        page-break-after: avoid;
                        page-break-inside: avoid;
                    }
                    
                    /* Force l'affichage complet */
                    .dpia-main-content {
                        max-height: none !important;
                        overflow: visible !important;
                    }
                }
                
                /* === CONTROLES UTILISATEUR === */
                .pdf-controls {
                    text-align: center;
                    margin: 30px 0;
                    padding: 25px;
                    background: #f1f5f9;
                    border-radius: 10px;
                    border: 1px solid #cbd5e1;
                }
                
                .pdf-button {
                    background: #2563eb;
                    color: white;
                    border: none;
                    padding: 14px 28px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    margin: 0 10px;
                    transition: all 0.3s;
                }
                
                .pdf-button:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                }
                
                .pdf-button.secondary {
                    background: #64748b;
                }
                
                .instructions {
                    margin-top: 20px;
                    color: #475569;
                    font-size: 14px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
            </style>
        </head>
        <body>
            <!-- EN-TÊTE PROFESSIONNEL -->
            <div class="pdf-header">
                <h1 class="pdf-title">📋 Document d'Impact sur la Protection des Données (DPIA)</h1>
                <div class="pdf-subtitle">${templateId.charAt(0).toUpperCase() + templateId.slice(1)}</div>
                <div class="pdf-meta">Conforme à l'Article 35 du Règlement Général sur la Protection des Données (RGPD)</div>
                <div class="pdf-meta">Généré le ${new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })} via Clarity AI</div>
            </div>
            
            <!-- CONTROLES POUR L'UTILISATEUR -->
            <div class="pdf-controls no-print">
                <button class="pdf-button" onclick="window.print()">
                    🖨️ Imprimer / Sauvegarder en PDF
                </button>
                <button class="pdf-button secondary" onclick="window.close()">
                    ✕ Fermer cette fenêtre
                </button>
                
                <div class="instructions">
                    <p><strong>💡 Instructions pour exporter en PDF :</strong></p>
                    <ol style="text-align: left; margin: 15px auto; max-width: 500px;">
                        <li>Cliquez sur <strong>"Imprimer / Sauvegarder en PDF"</strong></li>
                        <li>Dans la fenêtre d'impression, sélectionnez <strong>"Enregistrer au format PDF"</strong></li>
                        <li>Choisissez l'orientation <strong>"Portrait"</strong></li>
                        <li>Optionnel : ajustez les marges à <strong>"Défaut"</strong></li>
                        <li>Cliquez sur <strong>"Enregistrer"</strong></li>
                    </ol>
                </div>
            </div>
            
            <!-- CONTENU COMPLET DE LA DPIA -->
            <div class="pdf-content">
                ${dpiaContent}
            </div>
            
            <!-- PIED DE PAGE PROFESSIONNEL -->
            <div style="
                text-align: center; 
                margin-top: 50px; 
                padding-top: 20px; 
                border-top: 2px solid #e2e8f0; 
                color: #64748b; 
                font-size: 12px;
                page-break-inside: avoid;
            ">
                <p><strong>Document officiel de conformité RGPD</strong></p>
                <p>Conservez ce document pendant toute la durée du traitement des données</p>
                <p>Clarity AI - Solution de conformité RGPD & AI Act - www.clarity-ai.fr</p>
            </div>
            
            <!-- SCRIPT D'AIDE -->
            <script>
                // Afficher les instructions au chargement
                window.onload = function() {
                    // Petite pause puis instructions
                    setTimeout(function() {
                        alert("📄 PRÊT POUR L'EXPORT PDF !\\n\\n" +
                              "1. Cliquez sur le bouton 'Imprimer / Sauvegarder en PDF'\\n" +
                              "2. Choisissez 'Microsoft Print to PDF' ou 'Enregistrer au format PDF'\\n" +
                              "3. Sélectionnez 'Portrait' comme orientation\\n" +
                              "4. Enregistrez votre fichier\\n\\n" +
                              "✅ Votre DPIA complet sera sauvegardé !");
                    }, 800);
                    
                    // Focus sur la fenêtre
                    window.focus();
                };
                
                // Auto-impression après 5 secondes (optionnel - décommente si tu veux)
                // setTimeout(function() {
                //     window.print();
                // }, 5000);
            <\/script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Focus sur la nouvelle fenêtre
    setTimeout(() => {
        printWindow.focus();
    }, 300);
}

// Fonction pour mettre à jour la DPIA après connexion
function updateDPIAAfterLogin() {
    checkDPIAccess();
}
// ==================== HISTORIQUE DPIA ====================

// Afficher l'historique
function showDPIAHistory() {
    console.log('📜 Affichage historique DPIA');
    
    // Cacher toutes les sections
    document.querySelectorAll('.analyzer').forEach(section => {
        section.style.display = 'none';
    });
    
    // Afficher la section historique
    const historySection = document.getElementById('history-section');
    if (historySection) {
        historySection.style.display = 'block';
        
        // Charger l'historique
        loadDPIAHistory();
        
        // Scroll vers la section
        historySection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Charger l'historique depuis localStorage
function loadDPIAHistory() {
    const history = JSON.parse(localStorage.getItem('dpia_history') || '[]');
    const historyList = document.getElementById('history-list');
    const historyEmpty = document.getElementById('history-empty');
    
    if (!historyList || !historyEmpty) return;
    
    if (history.length === 0) {
        historyList.style.display = 'none';
        historyEmpty.style.display = 'block';
        return;
    }
    
    // Trier par date (plus récent d'abord)
    history.sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date));
    
    // Générer le HTML
    let html = '<div style="display: grid; gap: 15px;">';
    
    history.forEach(item => {
        html += `
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 4px solid ${item.color || '#2563eb'};">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div>
                        <h4 style="color: #1e293b; margin-bottom: 5px;">
                            DPIA - ${item.template ? item.template.charAt(0).toUpperCase() + item.template.slice(1) : 'Inconnu'}
                        </h4>
                        <p style="color: #64748b; font-size: 14px;">
                            <i class="far fa-calendar"></i> ${item.date || 'Date inconnue'}
                        </p>
                    </div>
                    <div style="background: ${item.color || '#2563eb'}; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600; font-size: 14px;">
                        ${item.score || '0'}/100
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button onclick="viewDPIAHistory(${item.id})" style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer;">
                        <i class="fas fa-eye"></i> Voir
                    </button>
                    <button onclick="deleteDPIAHistory(${item.id})" style="background: #f1f5f9; color: #64748b; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer;">
                        <i class="fas fa-trash"></i> Supprimer
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    historyList.innerHTML = html;
    historyList.style.display = 'block';
    historyEmpty.style.display = 'none';
}

// Sauvegarder une DPIA dans l'historique
function saveDPIAHistory(dpiaData) {
    if (!dpiaData) return;
    
    let history = JSON.parse(localStorage.getItem('dpia_history') || '[]');
    
    history.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString('fr-FR'),
        timestamp: new Date().toISOString(),
        template: dpiaData.template || 'unknown',
        score: dpiaData.score || 0,
        niveau: dpiaData.niveau || 'INCONNU',
        color: dpiaData.color || '#2563eb',
        responses: dpiaData.responses || {}
    });
    
    // Garder seulement les 20 dernières
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    localStorage.setItem('dpia_history', JSON.stringify(history));
    console.log('✅ DPIA sauvegardée dans l\'historique');
}


// Voir une DPIA de l'historique
function viewDPIAHistory(id) {
        // Cacher l'accueil (section hero)
    const heroSection = document.querySelector('.hero');
    if (heroSection) heroSection.style.display = 'none';
    
    // Cacher toutes les autres sections analyzer
    document.querySelectorAll('.analyzer').forEach(section => {
        if (section.id !== 'history-section') {
            section.style.display = 'none';
        }
    });
    // Montrer la section DPIA d'abord
    const dpiaSection = document.getElementById('dpia-section');
    if (dpiaSection) {
        dpiaSection.style.display = 'block';
    }
    // Récupérer l'historique
    let history = JSON.parse(localStorage.getItem('dpia_history') || '[]');
    
    // Trouver la DPIA avec cet ID
    const dpia = history.find(item => item.id == id);
    
    if (!dpia) {
        alert('DPIA non trouvée');
        return;
    }
    
    // Cacher les autres sections
    document.getElementById('dpia-step1').style.display = 'none';
    document.getElementById('dpia-step2').style.display = 'none';
    document.getElementById('history-section').style.display = 'none';
    
    // Afficher la section résultat
    const step3 = document.getElementById('dpia-step3');
    step3.style.display = 'block';
    
    // Générer le HTML de la DPIA
    const dpiaHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showDPIAHistory()" style="background: none; border: none; color: #2563eb; cursor: pointer; font-size: 14px;">
                ← Retour à l'historique
            </button>
        </div>
        
        <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
            <!-- En-tête avec score -->
            <div style="text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 2px solid #e2e8f0;">
                <div style="display: inline-block; background: ${dpia.color}; color: white; padding: 8px 20px; border-radius: 20px; margin-bottom: 15px; font-weight: 600;">
                    SCORE : ${dpia.score}/100 - ${dpia.niveau}
                </div>
                <h1 style="color: #1e293b; margin-bottom: 10px; font-size: 28px;">
                    DPIA - ${dpia.template.charAt(0).toUpperCase() + dpia.template.slice(1)}
                </h1>
                <p style="color: #64748b; margin-bottom: 5px;">
                    Document généré le ${dpia.date}
                </p>
            </div>
            
            <!-- Détail du score -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
                <h3 style="color: #1e293b; margin-bottom: 15px;">📊 Analyse du score</h3>
                <p style="color: #475569; margin-bottom: 10px;">
                    Votre système a obtenu un score de <strong>${dpia.score}/100</strong>.
                    ${dpia.score >= 80 ? 'Bon niveau de conformité.' : 
                      dpia.score >= 60 ? 'Améliorations recommandées.' : 
                      'Actions correctives nécessaires.'}
                </p>
            </div>
            
            <!-- Vos réponses -->
            <div style="margin-bottom: 40px;">
                <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 20px;">
                    <i class="fas fa-clipboard-check"></i> Vos réponses
                </h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">📊 Volume</div>
                        <div style="color: #2563eb; font-weight: 500;">${dpia.responses.volume} traitements/mois</div>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">🔒 Données</div>
                        <div style="color: #2563eb; font-weight: 500;">${dpia.responses.donnees}</div>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">🤖 Automation</div>
                        <div style="color: #2563eb; font-weight: 500;">${dpia.responses.automation}%</div>
                    </div>
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
                        <div style="font-weight: 600; color: #1e293b; margin-bottom: 5px;">⏳ Conservation</div>
                        <div style="color: #2563eb; font-weight: 500;">${dpia.responses.conservation}</div>
                    </div>
                </div>
            </div>
            
            <!-- Recommandations -->
            <div style="background: #f0f9ff; padding: 25px; border-radius: 12px; margin-bottom: 40px;">
                <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 18px;">
                    <i class="fas fa-check-circle"></i> Recommandations
                </h3>
                <ol style="color: #475569; padding-left: 20px; margin: 0; line-height: 1.6;">
                    <li>Documenter les critères de décision</li>
                    <li>Mettre en place un audit trimestriel</li>
                    <li>Informer clairement les personnes concernées</li>
                    ${dpia.score < 60 ? '<li>Revue complète de la conformité nécessaire</li>' : ''}
                </ol>
            </div>
            
            <!-- Actions -->
            <div style="text-align: center; padding-top: 30px; border-top: 2px solid #e2e8f0;">
                <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;">
                    <button onclick="downloadDPIAPDF('${dpia.template}')" style="background: #2563eb; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-file-pdf"></i> Télécharger PDF
                    </button>
                    <button onclick="window.print()" style="background: white; color: #2563eb; border: 2px solid #2563eb; padding: 12px 25px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-print"></i> Imprimer
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Afficher la DPIA
    step3.innerHTML = dpiaHTML;
    
    // Scroll vers le résultat
    step3.scrollIntoView({ behavior: 'smooth' });
}

// Supprimer une DPIA de l'historique
function deleteDPIAHistory(id) {
    if (!confirm('Supprimer cette DPIA de l\'historique ?')) return;
    
    let history = JSON.parse(localStorage.getItem('dpia_history') || '[]');
    history = history.filter(item => item.id !== id);
    localStorage.setItem('dpia_history', JSON.stringify(history));
    
    loadDPIAHistory();
}

// ==================== EXPORT DES FONCTIONS ====================

window.showDPIAStep1 = showDPIAStep1;
window.generateDPIAResult = generateDPIAResult;
window.downloadDPIAPDF = downloadDPIAPDF;
window.updateDPIAAfterLogin = updateDPIAAfterLogin;
window.showHomePage = showHomePage;
window.handleDPIANavClick = handleDPIANavClick;
window.generateDPIAWithGroq = generateDPIAWithGroq;
window.displayGroqDPIA = displayGroqDPIA;
window.displayBasicDPIA = displayBasicDPIA;
