// ========================================
// SCRIPT DE TEMA CLARO/ESCURO - La Maison
// ========================================

/**
 * Alternar tema
 */
function alternarTema() {
    const html = document.documentElement;
    const temaAtual = html.getAttribute('data-theme');
    const novoTema = temaAtual === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', novoTema);
    document.body.classList.toggle('light-mode');
    localStorage.setItem('tema', novoTema);
    atualizarIconeTema();
}

/**
 * Atualizar ícone do tema
 */
function atualizarIconeTema() {
    const themeToggle = document.getElementById('themeToggle');
    const tema = localStorage.getItem('tema') || 'dark';

    if (themeToggle) {
        if (tema === 'light') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

/**
 * Carregar tema salvo
 */
function carregarTema() {
    const tema = localStorage.getItem('tema') || 'dark';
    const html = document.documentElement;

    html.setAttribute('data-theme', tema);

    if (tema === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }

    atualizarIconeTema();
}

// Configurar toggle de tema
if (document.getElementById('themeToggle')) {
    document.getElementById('themeToggle').addEventListener('click', alternarTema);
}

// Carregar tema ao iniciar
carregarTema();

// Preferência de sistema
if (window.matchMedia && !localStorage.getItem('tema')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('tema', prefersDark ? 'dark' : 'light');
    carregarTema();
}