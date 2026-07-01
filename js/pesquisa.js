// ========================================
// SCRIPT DE PESQUISA - La Maison
// ========================================

/**
 * Buscar produtos
 */
function buscarProdutos(termo) {
    if (!termo || termo.trim() === '') {
        renderizarCardapio(produtos);
        return;
    }

    const termoLowercase = termo.toLowerCase();
    const resultados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termoLowercase) ||
        produto.descricao.toLowerCase().includes(termoLowercase) ||
        produto.categoria.toLowerCase().includes(termoLowercase)
    );

    renderizarCardapio(resultados);
}

// Configurar busca
if (document.getElementById('searchInput')) {
    const searchInput = document.getElementById('searchInput');

    // Busca em tempo real
    searchInput.addEventListener('input', (e) => {
        const termo = e.target.value;
        buscarProdutos(termo);
    });

    // Busca ao pressionar Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buscarProdutos(e.target.value);
        }
    });
}