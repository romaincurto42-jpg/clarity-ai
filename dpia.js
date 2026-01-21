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
function downloadDPIAPDF(templateId) {
    console.log('📥 Génération PDF améliorée pour:', templateId);
    
    // Récupère TOUT le contenu DPIA
    let dpiaContent = '';
    
    // Essaie d'abord de récupérer le contenu amélioré
    const enhancedContainer = document.querySelector('.dpia-enhanced-container');
    if (enhancedContainer) {
        console.log('✅ Utilisation du contenu amélioré');
        dpiaContent = enhancedContainer.outerHTML;
    } else {
        // Fallback : récupère l'ancien format
        const step3 = document.getElementById('dpia-step3');
        if (step3) {
            dpiaContent = step3.innerHTML;
        } else {
            alert('❌ Aucun contenu DPIA trouvé');
            return;
        }
    }
    
    // Crée une page COMPLÈTE pour l'impression
    const printWindow = window.open('', '_blank');
    
    // Template HTML optimisé pour l'impression
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DPIA - ${templateId.toUpperCase()}</title>
            <style>
                /* Reset pour impression */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    padding: 20px;
                    background: white;
                }
                
                /* En-tête */
                .print-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 3px solid #2563eb;
                }
                
                .print-title {
                    color: #1e293b;
                    font-size: 24px;
                    margin-bottom: 10px;
                }
                
                .print-meta {
                    color: #64748b;
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                
                .print-score {
                    display: inline-block;
                    background: #2563eb;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 20px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                
                /* Contenu DPIA */
                .dpia-content-print {
                    margin: 30px 0;
                    max-width: 100%;
                    overflow: visible !important;
                }
                
                /* Styles pour le contenu amélioré */
                .dpia-enhanced-container {
                    background: white !important;
                    border: 1px solid #ddd !important;
                    box-shadow: none !important;
                    margin: 0 !important;
                    padding: 20px !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow: visible !important;
                }
                
                .dpia-content-wrapper {
                    display: block !important;
                    grid-template-columns: none !important;
                    gap: 0 !important;
                }
                
                .dpia-sidebar {
                    display: none !important; /* Cache la sidebar en PDF */
                }
                
                .dpia-main-content {
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow: visible !important;
                    font-size: 14px !important;
                    line-height: 1.5 !important;
                }
                
                .dpia-actions-enhanced,
                .dpia-actions-sidebar,
                .btn-primary,
                .btn-secondary,
                .btn-success,
                .btn-info {
                    display: none !important; /* Cache les boutons */
                }
                
                .dpia-metadata {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                    margin-bottom: 20px !important;
                    padding-bottom: 10px !important;
                }
                
                .dpia-stats {
                    margin-top: 10px !important;
                    font-size: 12px !important;
                }
                
                /* Checklist visible */
                .dpia-checklist {
                    page-break-inside: avoid;
                    margin: 20px 0 !important;
                    padding: 15px !important;
                    border: 1px solid #bae6fd !important;
                    background: #f0f9ff !important;
                }
                
                /* Pour éviter les coupures */
                h4, h5, .section {
                    page-break-after: avoid;
                    page-break-inside: avoid;
                }
                
                /* Boutons d'impression */
                .print-controls {
                    text-align: center;
                    margin: 20px 0;
                    padding: 20px;
                    background: #f8fafc;
                    border-radius: 8px;
                }
                
                .print-btn {
                    background: #2563eb;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 6px;
                    font-weight: bold;
                    cursor: pointer;
                    margin: 0 10px;
                    display: inline-block;
                }
                
                .print-btn:hover {
                    background: #1d4ed8;
                }
                
                .close-btn {
                    background: #64748b;
                }
                
                /* Media query pour impression */
                @media print {
                    .print-controls {
                        display: none !important;
                    }
                    
                    body {
                        padding: 10px !important;
                    }
                    
                    .dpia-main-content {
                        font-size: 12px !important;
                    }
                    
                    .dpia-checklist {
                        border: 1px solid #ccc !important;
                    }
                    
                    /* Force l'affichage complet */
                    .dpia-enhanced-container {
                        height: auto !important;
                        overflow: visible !important;
                        page-break-inside: avoid;
                    }
                    
                    .dpia-main-content {
                        height: auto !important;
                        max-height: none !important;
                        overflow: visible !important;
                    }
                }
            </style>
        </head>
        <body>
            <!-- En-tête d'impression -->
            <div class="print-header">
                <h1 class="print-title">📋 DPIA - ${templateId.charAt(0).toUpperCase() + templateId.slice(1)}</h1>
                <div class="print-meta">
                    Document généré le ${new Date().toLocaleDateString('fr-FR')} via Clarity AI
                </div>
                <div class="print-meta">
                    Conforme RGPD - Article 35 - Analyse d'Impact
                </div>
            </div>
            
            <!-- Contrôles d'impression -->
            <div class="print-controls no-print">
                <button class="print-btn" onclick="window.print()">
                    🖨️ Imprimer / Sauvegarder en PDF
                </button>
                <button class="print-btn close-btn" onclick="window.close()">
                    ✕ Fermer
                </button>
                <p style="margin-top: 10px; color: #64748b; font-size: 14px;">
                    <strong>Instructions :</strong> Cliquez sur "Imprimer" puis sélectionnez "Enregistrer au format PDF"
                </p>
            </div>
            
            <!-- Contenu DPIA COMPLET -->
            <div class="dpia-content-print">
                ${dpiaContent}
            </div>
            
            <!-- Pied de page -->
            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
                <p>Document généré par Clarity AI - Conformité RGPD & AI Act</p>
                <p>Conservez ce document pendant toute la durée du traitement et pour justifier de votre conformité</p>
            </div>
            
            <!-- Script pour lancer l'impression automatiquement après 1s -->
            <script>
                // Affiche les instructions
                setTimeout(function() {
                    alert("Pour sauvegarder en PDF :\\n1. Cliquez sur 'Imprimer / Sauvegarder en PDF'\\n2. Dans la fenêtre d'impression, choisissez 'Enregistrer au format PDF'\\n3. Sélectionnez l'orientation 'Portrait'\\n4. Cliquez sur 'Enregistrer'");
                    
                    // Auto-impression après 3 secondes (optionnel)
                    // setTimeout(() => window.print(), 3000);
                }, 500);
            <\/script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Focus sur la fenêtre
    setTimeout(() => {
        printWindow.focus();
    }, 1000);
}

// Fonction pour mettre à jour la DPIA après connexion
function updateDPIAAfterLogin() {
    checkDPIAccess();
}
// =
