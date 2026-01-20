// translations.js - Toutes les traductions

const TRANSLATIONS = {
    // Navigation
    'nav.home': { fr: 'Accueil', en: 'Home', es: 'Inicio' },
    'nav.features': { fr: 'Fonctionnalités', en: 'Features', es: 'Características' },
    'nav.dpia': { fr: 'DPIA', en: 'DPIA', es: 'DPIA' },
     'nav.pricing': { fr: 'Tarifs', en: 'Pricing', es: 'Precios' },
    'nav.contact': { fr: 'Contact', en: 'Contact', es: 'Contacto' },
    'nav.dashboard': { fr: 'Mon Dashboard', en: 'My Dashboard', es: 'Mi Panel' },
    'nav.login': { fr: 'Connexion', en: 'Login', es: 'Iniciar sesión' },
    'nav.register': { fr: 'Inscription', en: 'Register', es: 'Registrarse' },
    'nav.profile': { fr: 'Profil', en: 'Profile', es: 'Perfil' },
    'nav.logout': { fr: 'Déconnexion', en: 'Logout', es: 'Cerrar sesión' },
    
    // Page d'accueil (complète avec tous tes textes)
    'home.title': { fr: 'Analyseur RGPD Intelligent', en: 'Smart GDPR Analyzer', es: 'Analizador RGPD Inteligente' },
    'home.subtitle': { fr: 'Analyse automatique de vos formulaires et processus', en: 'Automatic analysis of your forms and processes', es: 'Análisis automático de sus formularios y procesos' },
    'home.choose_template': { fr: 'Choisissez un template', en: 'Choose a template', es: 'Elija una plantilla' },
    'home.recruitment': { fr: 'Recrutement', en: 'Recruitment', es: 'Reclutamiento' },
    'home.health': { fr: 'Santé', en: 'Health', es: 'Salud' },
    'home.finance': { fr: 'Finance', en: 'Finance', es: 'Finanzas' },
    'home.custom': { fr: 'Personnalisé', en: 'Custom', es: 'Personalizado' },
    'home.paste_text': { fr: 'Collez votre texte ici...', en: 'Paste your text here...', es: 'Pegue su texto aquí...' },
    'home.analyze': { fr: 'Analyser', en: 'Analyze', es: 'Analizar' },
    'home.clear': { fr: 'Effacer', en: 'Clear', es: 'Limpiar' },
    'home.analysis_results': { fr: 'Résultats de l\'analyse', en: 'Analysis Results', es: 'Resultados del análisis' },
    'home.compliance_score': { fr: 'Score de conformité', en: 'Compliance Score', es: 'Puntuación de cumplimiento' },
    'home.recommendations': { fr: 'Recommandations', en: 'Recommendations', es: 'Recomendaciones' },
    'home.risks_detected': { fr: 'Risques détectés', en: 'Risks detected', es: 'Riesgos detectados' },
    'home.main_title': { 
    fr: 'Conformité AI Act & RGPD Automatisée', 
    en: 'Automated AI Act & GDPR Compliance', 
    es: 'Cumplimiento Automatizado AI Act & RGPD' 
},
'home.main_subtitle': { 
    fr: 'Analysez vos systèmes d\'IA en temps réel. Évitez les amendes jusqu\'à 7% de votre chiffre d\'affaires.', 
    en: 'Analyze your AI systems in real-time. Avoid fines up to 7% of your revenue.', 
    es: 'Analice sus sistemas de IA en tiempo real. Evite multas de hasta el 7% de sus ingresos.' 
},
'home.examples': { fr: 'Exemples Prédéfinis', en: 'Predefined Examples', es: 'Ejemplos Predefinidos' },
'home.analyzer_title': { fr: 'Analyseur de Conformité', en: 'Compliance Analyzer', es: 'Analizador de Cumplimiento' },
'home.company_label': { fr: 'Nom de l\'entreprise', en: 'Company Name', es: 'Nombre de la empresa' },
'home.company_placeholder': { fr: 'Ex: MaStartup SAS', en: 'Ex: MyStartup LLC', es: 'Ej: MiStartup S.L.' },
'home.system_label': { fr: 'Décrivez votre système d\'IA', en: 'Describe your AI system', es: 'Describa su sistema de IA' },
'home.text_placeholder': { fr: 'Décrivez en détail votre utilisation de l\'intelligence artificielle...', en: 'Describe in detail your use of artificial intelligence...', es: 'Describa en detalle su uso de inteligencia artificial...' },
'home.analyze_button': { fr: 'Analyser la Conformité', en: 'Analyze Compliance', es: 'Analizar Cumplimiento' },
'home.loading_title': { fr: 'Analyse en cours...', en: 'Analysis in progress...', es: 'Análisis en curso...' },
'home.loading_text': { fr: 'Notre IA examine votre texte pour identifier les risques de conformité', en: 'Our AI is examining your text to identify compliance risks', es: 'Nuestra IA examina su texto para identificar riesgos de cumplimiento' },
'home.report_title': { fr: 'Rapport d\'Analyse', en: 'Analysis Report', es: 'Informe de Análisis' },
'home.copy_button': { fr: 'Copier', en: 'Copy', es: 'Copiar' },
'home.pdf_button': { fr: 'PDF', en: 'PDF', es: 'PDF' },
'home.save_button': { fr: 'Sauvegarder', en: 'Save', es: 'Guardar' },
'home.csv_button': { fr: 'CSV', en: 'CSV', es: 'CSV' },
    // DPIA (complète avec tous tes textes)
    'dpia.title': { fr: 'Générateur de DPIA Automatisé', en: 'Automated DPIA Generator', es: 'Generador Automático de DPIA' },
    'dpia.subtitle': { fr: 'Créez votre Analyse d\'Impact en quelques clics', en: 'Create your Impact Analysis in a few clicks', es: 'Cree su Análisis de Impacto en unos clics' },
    'dpia.choose_template': { fr: 'Choisissez votre secteur', en: 'Choose your sector', es: 'Elija su sector' },
    'dpia.recruitment_desc': { fr: 'Pour les processus de recrutement et RH', en: 'For recruitment and HR processes', es: 'Para procesos de reclutamiento y RRHH' },
    'dpia.health_desc': { fr: 'Pour les données médicales et de santé', en: 'For medical and health data', es: 'Para datos médicos y de salud' },
    'dpia.finance_desc': { fr: 'Pour les données financières et bancaires', en: 'For financial and banking data', es: 'Para datos financieros y bancarios' },
    'dpia.start': { fr: 'Commencer', en: 'Start', es: 'Comenzar' },
    'dpia.back_choice': { fr: '← Retour au choix', en: '← Back to choice', es: '← Volver a la elección' },
    'dpia.back_home': { fr: '← Retour à l\'accueil', en: '← Back to home', es: '← Volver al inicio' },
    'dpia.new_dpia': { fr: '← Nouvelle DPIA', en: '← New DPIA', es: '← Nueva DPIA' },
    'dpia.generate': { fr: 'Générer ma DPIA complète', en: 'Generate my complete DPIA', es: 'Generar mi DPIA completa' },
    
    // Questions DPIA
    'dpia.q1': { fr: 'Volume de traitement mensuel ?', en: 'Monthly processing volume?', es: '¿Volumen de procesamiento mensual?' },
    'dpia.q2': { fr: 'Type de données traitées ?', en: 'Type of data processed?', es: '¿Tipo de datos procesados?' },
    'dpia.q3': { fr: 'Pourcentage de décision automatisée ?', en: 'Percentage of automated decision?', es: '¿Porcentaje de decisión automatizada?' },
    'dpia.q4': { fr: 'Durée de conservation des données ?', en: 'Data retention period?', es: '¿Período de retención de datos?' },
    'dpia.q5': { fr: 'Qui a accès aux données ?', en: 'Who has access to the data?', es: '¿Quién tiene acceso a los datos?' },
    
    // Résultats DPIA
    'dpia.result.score': { fr: 'SCORE', en: 'SCORE', es: 'PUNTUACIÓN' },
    'dpia.result.date': { fr: 'Document généré le', en: 'Document generated on', es: 'Documento generado el' },
    'dpia.result.analysis': { fr: 'Analyse du score', en: 'Score analysis', es: 'Análisis de puntuación' },
    'dpia.result.improvements': { fr: 'Points d\'amélioration', en: 'Improvement points', es: 'Puntos de mejora' },
    'dpia.result.your_answers': { fr: 'Vos réponses', en: 'Your answers', es: 'Sus respuestas' },
    'dpia.result.recommendations': { fr: 'Recommandations', en: 'Recommendations', es: 'Recomendaciones' },
    'dpia.result.download_pdf': { fr: 'Télécharger PDF', en: 'Download PDF', es: 'Descargar PDF' },
    'dpia.result.print': { fr: 'Imprimer', en: 'Print', es: 'Imprimir' },
    
    // Footer
    'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved', es: 'Todos los derechos reservados' },
    'footer.privacy': { fr: 'Politique de confidentialité', en: 'Privacy Policy', es: 'Política de privacidad' },
    'footer.terms': { fr: 'Conditions d\'utilisation', en: 'Terms of Service', es: 'Términos de servicio' },
    
    // Login/Register
    'login.title': { fr: 'Connexion', en: 'Login', es: 'Iniciar sesión' },
    'register.title': { fr: 'Inscription', en: 'Register', es: 'Registrarse' },
    'login.email': { fr: 'Email', en: 'Email', es: 'Correo electrónico' },
    'login.password': { fr: 'Mot de passe', en: 'Password', es: 'Contraseña' },
    'login.remember': { fr: 'Se souvenir de moi', en: 'Remember me', es: 'Recordarme' },
    'login.forgot': { fr: 'Mot de passe oublié ?', en: 'Forgot password?', es: '¿Olvidó su contraseña?' },
    'login.no_account': { fr: 'Pas encore de compte ?', en: 'No account yet?', es: '¿No tiene cuenta aún?' },
    'login.has_account': { fr: 'Déjà un compte ?', en: 'Already have an account?', es: '¿Ya tiene una cuenta?' },
    'login.submit': { fr: 'Se connecter', en: 'Sign in', es: 'Iniciar sesión' },
    'register.submit': { fr: 'S\'inscrire', en: 'Sign up', es: 'Registrarse' }
};

// Configuration
const SUPPORTED_LANGUAGES = ['fr', 'en', 'es'];
const DEFAULT_LANGUAGE = 'fr';

// Récupérer la langue actuelle
function getCurrentLanguage() {
    return localStorage.getItem('clarity_language') || 
           navigator.language.split('-')[0] || 
           DEFAULT_LANGUAGE;
}

// Sauvegarder la langue
function saveLanguage(lang) {
    localStorage.setItem('clarity_language', lang);
}

// Fonction de traduction
function t(key, lang = null) {
    const language = lang || getCurrentLanguage();
    const translation = TRANSLATIONS[key];
    
    if (!translation) {
        console.warn(`⚠️ Traduction manquante: ${key}`);
        return key;
    }
    
    return translation[language] || translation[DEFAULT_LANGUAGE] || key;
}

// Changer de langue
function changeLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.error(`Langue non supportée: ${lang}`);
        return;
    }
    
    // Sauvegarder la préférence
    saveLanguage(lang);
    
    // Mettre à jour l'interface
    applyTranslations(lang);
    
    // Mettre en surbrillance le bouton actif
    highlightActiveLanguage(lang);
    
    // Déclencher un événement personnalisé
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
    
    console.log(`🌍 Langue changée: ${lang}`);
}

// Appliquer les traductions
function applyTranslations(lang = null) {
    const language = lang || getCurrentLanguage();
    
    console.log(`🔤 Application des traductions: ${language}`);
    
    // 1. Textes normaux
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key, language);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = t(key, language);
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // 3. Titres et attributs
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translation = t(key, language);
        
        if (translation) {
            element.title = translation;
        }
    });
    
    // 4. Titre de la page
    document.title = t('home.title', language);
    
    // 5. Mettre à jour les contenus dynamiques
    updateDynamicTranslations(language);
}

// Mettre à jour les contenus dynamiques (DPIA, etc.)
function updateDynamicTranslations(lang) {
    // Informer les autres modules du changement de langue
    if (typeof updateDPIATranslations === 'function') {
        updateDPIATranslations(lang);
    }
    
    if (typeof updateAnalyzerTranslations === 'function') {
        updateAnalyzerTranslations(lang);
    }
    
    // Mettre à jour les formulaires existants
    updateFormsTranslations(lang);
}

// Mettre à jour les formulaires
function updateFormsTranslations(lang) {
    // DPIA forms
    const dpiaForms = document.querySelectorAll('[id^="dpia-form-"]');
    dpiaForms.forEach(form => {
        // Mettre à jour les labels, boutons, etc.
        const labels = form.querySelectorAll('label');
        labels.forEach(label => {
            // Logique pour mettre à jour les labels DPIA
            if (label.textContent.includes('Volume de traitement')) {
                label.textContent = t('dpia.q1', lang);
            }
            // ... autres conditions
        });
        
        // Mettre à jour le bouton de soumission
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.innerHTML = `<i class="fas fa-file-contract"></i> ${t('dpia.generate', lang)}`;
        }
    });
}

// Mettre en surbrillance la langue active
function highlightActiveLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
            btn.style.fontWeight = 'bold';
            btn.style.opacity = '1';
        } else {
            btn.classList.remove('active');
            btn.style.fontWeight = 'normal';
            btn.style.opacity = '0.7';
        }
    });
}

// Initialiser le système de langue
function initLanguage() {
    const currentLang = getCurrentLanguage();
    
    console.log(`🌐 Initialisation multilinguisme: ${currentLang}`);
    
 
    // Appliquer les traductions
    applyTranslations(currentLang);
    
    // Mettre en surbrillance la langue active
    highlightActiveLanguage(currentLang);
    
    // Écouter les changements de langue
    document.addEventListener('languageChanged', (event) => {
        console.log(`Langue changée vers: ${event.detail.language}`);
    });
}

// Créer le sélecteur de langue
function createLanguageSelector() {
    console.log('✅ Sélecteur HTML déjà présent - aucune création nécessaire');
    return; // NE RIEN FAIRE, on a déjà le sélecteur dans le HTML
}
// Exporter les fonctions
window.t = t;
window.changeLanguage = changeLanguage;
window.initLanguage = initLanguage;
window.getCurrentLanguage = getCurrentLanguage;