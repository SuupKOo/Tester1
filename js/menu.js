// ========================================
// SCRIPT DO CARDÁPIO - La Maison
// ========================================

/**
 * Renderizar cardápio completo
 */
function renderizarCardapio(items = produtos) {
    const container = document.getElementById('cardapioGrid');
    const semResultados = document.getElementById('semResultados');

    container.innerHTML = '';

    if (items.length === 0) {
        semResultados.style.display = 'block';
        return;
    }

    semResultados.style.display = 'none';

    items.forEach(produto => {
        const card = criarCardapioProduto(produto);
        container.appendChild(card);
    });
}

/**
 * Criar card para cardápio
 */
function criarCardapioProduto(produto) {
    const card = criarElemento('div', 'product-card');
    const badgeTexto = produto.especial ? '⭐ Especial da Casa' : (produto.novo ? '🆕 Novo' : '');
    const badgeHTML = badgeTexto ? `<div class="product-badge">${badgeTexto}</div>` : '';
    const isFavorito = JSON.parse(localStorage.getItem('favoritos') || '[]').includes(produto.id);

    card.innerHTML = `
        ${badgeHTML}
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" loading="lazy" onclick="abrirModalProduto(${produto.id})" style="cursor: pointer;">
        <div class="product-content">
            <h3 class="product-name">${produto.nome}</h3>
            <p class="product-description">${produto.descricao}</p>
            <span class="prato-categoria">${produto.categoria}</span>
            <div class="prato-footer">
                <span class="product-price">${formatarPreco(produto.preco)}</span>
                <span class="product-rating">${gerarStars(produto.rating)}</span>
            </div>
            <div class="product-actions">
                <button class="btn-favorito ${isFavorito ? 'favorito' : ''}" onclick="toggleFavorito(${produto.id}, event)">
                    <i class="${isFavorito ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="btn-comprar" onclick="adicionarAoCarrinho(${produto.id})">Comprar</button>
            </div>
        </div>
    `;

    return card;
}

/**
 * Abrir modal do produto
 */
function abrirModalProduto(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    const modal = document.getElementById('produtoModal');
    const modalBody = document.getElementById('modalBody');

    if (!produto) return;

    const isFavorito = JSON.parse(localStorage.getItem('favoritos') || '[]').includes(produtoId);

    modalBody.innerHTML = `
        <div class="modal-produto">
            <img src="${produto.imagem}" alt="${produto.nome}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem;">
            <h2>${produto.nome}</h2>
            <p style="color: var(--text-secondary); margin: 1rem 0;">${produto.descricao}</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0;">
                <div>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Categoria</p>
                    <p style="font-weight: bold;">${produto.categoria}</p>
                </div>
                <div>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Avaliação</p>
                    <p>${gerarStars(produto.rating)}</p>
                </div>
            </div>

            <div style="background: rgba(201, 162, 39, 0.1); padding: 1rem; border-radius: 8px; margin: 1.5rem 0;">
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.5rem;">Preço</p>
                <p style="font-size: 1.8rem; color: var(--primary-color); font-weight: bold;">${formatarPreco(produto.preco)}</p>
            </div>

            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button class="btn-favorito ${isFavorito ? 'favorito' : ''}" style="flex: 1;" onclick="toggleFavorito(${produto.id}, event)">
                    <i class="${isFavorito ? 'fas' : 'far'} fa-heart"></i> Favorito
                </button>
                <button class="btn btn-primary" style="flex: 1;" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Fechar modal
 */
const closeProduto = document.getElementById('closeProduto');
if (closeProduto) {
    closeProduto.addEventListener('click', () => {
        document.getElementById('produtoModal').classList.remove('active');
    });
}

// Filtros
if (document.querySelectorAll('.filtro-btn')) {
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
            e.target.closest('button').classList.add('active');

            const filtro = e.target.closest('button').dataset.filtro;
            if (filtro === 'todos') {
                renderizarCardapio(produtos);
            } else {
                const filtrados = produtos.filter(p => p.categoria === filtro);
                renderizarCardapio(filtrados);
            }
        });
    });
}

// Ordenação
if (document.getElementById('ordenar')) {
    document.getElementById('ordenar').addEventListener('change', (e) => {
        const opcao = e.target.value;
        let ordenados = [...produtos];

        switch (opcao) {
            case 'preco-baixo':
                ordenados.sort((a, b) => a.preco - b.preco);
                break;
            case 'preco-alto':
                ordenados.sort((a, b) => b.preco - a.preco);
                break;
            case 'avaliacao':
                ordenados.sort((a, b) => b.rating - a.rating);
                break;
            case 'vendidos':
                ordenados.sort((a, b) => b.vendidos - a.vendidos);
                break;
            default:
                ordenados.sort((a, b) => a.nome.localeCompare(b.nome));
        }

        renderizarCardapio(ordenados);
    });
}

// Renderizar cardápio ao carregar
if (document.getElementById('cardapioGrid')) {
    renderizarCardapio(produtos);
}