// ==================== MODULE DPIA ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Module DPIA chargé');
    setTimeout(initDPIA, 500);
});

function initDPIA() {
    console.log('🎯 Initialisation DPIA');
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
          // ========== AFFICHER LE RÉSULTAT ==========
        step3.innerHTML = dpiaHTML;
        step3.style.display = 'block';
        // ===========================================
                   
                      // Scroll vers le résultat
        step3.scrollIntoView({ behavior: 'smooth' });
        
        // ========== SAUVEGARDE DANS L'HISTORIQUE ==========
        const dpiaData = {
            template: templateId,
            score: scoreResult.score,
            niveau: scoreResult.niveau,
            color: scoreResult.couleur,
            responses: responses
        };
        
        saveDPIAHistory(dpiaData);
        // =================================================
        
    } catch (error) {
        console.error('❌ Erreur génération DPIA:', error);
        alert('Erreur lors de la génération de la DPIA');
    }
}

function downloadDPIAPDF(templateId) {
    console.log('📥 Génération PDF pour:', templateId);
    
    // Créer le contenu HTML pour le PDF
    const dpiaContent = document.getElementById('dpia-step3').innerHTML;
    
    // Créer une nouvelle fenêtre pour l'impression
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>DPIA - ${templateId.toUpperCase()}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .score { background: #2563eb; color: white; padding: 10px 20px; border-radius: 20px; display: inline-block; margin-bottom: 15px; }
                .section { margin-bottom: 25px; }
                .responses { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 20px 0; }
                .response-box { border: 1px solid #ddd; padding: 15px; border-radius: 8px; }
                .recommendations { background: #f0f9ff; padding: 20px; border-radius: 10px; }
                @media print {
                    button { display: none !important; }
                    .no-print { display: none !important; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>DPIA - ${templateId.charAt(0).toUpperCase() + templateId.slice(1)}</h1>
                <p>Document généré le ${new Date().toLocaleDateString('fr-FR')}</p>
            </div>
            
            <div style="margin-bottom: 20px;" class="no-print">
                <button onclick="window.print()" style="background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                    🖨️ Imprimer / Sauvegarder en PDF
                </button>
                <button onclick="window.close()" style="background: #64748b; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-left: 10px;">
                    Fermer
                </button>
            </div>
            
            ${dpiaContent}
            
            <script>
                window.onload = function() {
                    alert("Pour sauvegarder en PDF :\\n1. Cliquez sur 'Imprimer / Sauvegarder en PDF'\\n2. Dans la fenêtre d'impression, choisissez 'Enregistrer au format PDF'\\n3. Sélectionnez l'emplacement et enregistrez");
                }
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
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
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius=8px;">
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

// ==================== MODIFICATION DE generateDPIAResult() ====================

// Tu dois MODIFIER ta fonction existante generateDPIAResult()
// Ouvre dpia.js et trouve la fonction generateDPIAResult()
// À la FIN de cette fonction, APRÈS avoir généré le résultat, ajoute :

/*
    // Sauvegarder dans l'historique (à la fin de generateDPIAResult)
    const dpiaData = {
        template: templateId,
        score: scoreResult.score,
        niveau: scoreResult.niveau,
        couleur: scoreResult.couleur,
        responses: responses
    };
    
    saveDPIAHistory(dpiaData);
*/
// ==================== EXPORT DES FONCTIONS ====================

window.showDPIAStep1 = showDPIAStep1;
window.generateDPIAResult = generateDPIAResult;
window.downloadDPIAPDF = downloadDPIAPDF;
window.updateDPIAAfterLogin = updateDPIAAfterLogin;
window.showHomePage = showHomePage;
window.handleDPIANavClick = handleDPIANavClick;
