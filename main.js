// main.js - Fichier principal d'initialisation

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Clarity RGPD initialisé');
    
    // 1. Initialiser le multilinguisme
    initLanguage();
    
    // 2. Initialiser les fonctionnalités de base
    initBasicFeatures();
    
    // 3. Initialiser le module DPIA (défini dans dpia.js)
    if (typeof initDPIA === 'function') {
        setTimeout(initDPIA, 300);
    }
    
    // 4. Initialiser l'analyseur (si tu l'as)
    if (typeof initAnalyzer === 'function') {
        initAnalyzer();
    }
    
    // 5. Vérifier l'authentification
    checkAuthStatus();
});

// Fonctions de base
function initBasicFeatures() {
    console.log('🔧 Initialisation des fonctionnalités de base');
    
    // Dark mode toggle (optionnel)
    initDarkMode();
    
    // Gestion des messages flash
    initFlashMessages();
    
    // Initialiser les tooltips
    initTooltips();
    
    // Gestion du responsive
    initResponsive();
}

function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Restaurer le mode
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

function initFlashMessages() {
    // Auto-hide les messages après 5 secondes
    setTimeout(() => {
        document.querySelectorAll('.alert, .flash-message').forEach(msg => {
            if (msg.style.opacity !== '0') {
                msg.style.transition = 'opacity 0.5s';
                msg.style.opacity = '0';
                setTimeout(() => msg.remove(), 500);
            }
        });
    }, 5000);
}

function initTooltips() {
    // Initialiser les tooltips Bootstrap si présents
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

function initResponsive() {
    // Gérer le menu burger sur mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function checkAuthStatus() {
    const user = localStorage.getItem('clarity_user');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const dpiaTab = document.getElementById('dpia-tab');
    
    if (user) {
        // Utilisateur connecté
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
        if (dpiaTab) dpiaTab.style.display = 'inline-block';
    } else {
        // Utilisateur non connecté
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (dpiaTab) dpiaTab.style.display = 'none';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('clarity_user');
    localStorage.removeItem('clarity_token');
    window.location.href = 'index.html';
}

// Exporter les fonctions globales
window.logout = logout;
window.checkAuthStatus = checkAuthStatus;