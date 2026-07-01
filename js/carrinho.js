// ========================================
// SCRIPT DO CARRINHO - La Maison
// ========================================

/**
 * Adicionar ao carrinho
 */
function adicionarAoCarrinho(produtoId, quantidade = 1) {
    const produto = produtos.find(p => p.id === produtoId);
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const itemExistente = carrinho.find(item => item.id === produtoId);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: quantidade
        });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarBadges();
    mostrarToast(`${produto.nome} adicionado ao carrinho!`);
    fecharModalProduto();
}

/**
 * Remover do carrinho
 */
function removerDoCarrinho(produtoId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
    mostrarToast('Produto removido do carrinho');
}

/**
 * Atualizar quantidade
 */
function atualizarQuantidade(produtoId, novaQuantidade) {
    if (novaQuantidade <= 0) {
        removerDoCarrinho(produtoId);
        return;
    }

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = carrinho.find(i => i.id === produtoId);

    if (item) {
        item.quantidade = novaQuantidade;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

/**
 * Aumentar quantidade
 */
function aumentarQuantidade(produtoId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = carrinho.find(i => i.id === produtoId);
    if (item) {
        item.quantidade++;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

/**
 * Diminuir quantidade
 */
function diminuirQuantidade(produtoId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = carrinho.find(i => i.id === produtoId);
    if (item && item.quantidade > 1) {
        item.quantidade--;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

/**
 * Limpar carrinho
 */
function limparCarrinho() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        localStorage.setItem('carrinho', JSON.stringify([]));
        atualizarCarrinho();
        mostrarToast('Carrinho limpo');
    }
}

/**
 * Atualizar carrinho
 */
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoVazio = document.getElementById('carrinhoVazio');
    const carrinhoSection = document.getElementById('carrinhoSection');
    const itemsList = document.getElementById('itemsList');

    if (carrinho.length === 0) {
        if (carrinhoVazio) carrinhoVazio.style.display = 'block';
        if (carrinhoSection) carrinhoSection.style.display = 'none';
        return;
    }

    if (carrinhoVazio) carrinhoVazio.style.display = 'none';
    if (carrinhoSection) carrinhoSection.style.display = 'grid';

    if (itemsList) {
        itemsList.innerHTML = '';
        carrinho.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}" class="item-image">
                <div class="item-info">
                    <h3>${item.nome}</h3>
                    <p>${formatarPreco(item.preco)}</p>
                </div>
                <div>
                    <div class="item-quantidade">
                        <button onclick="diminuirQuantidade(${item.id})">-</button>
                        <span>${item.quantidade}</span>
                        <button onclick="aumentarQuantidade(${item.id})">+</button>
                    </div>
                    <div class="item-preco" style="margin-top: 0.5rem;">${formatarPreco(item.preco * item.quantidade)}</div>
                    <button onclick="removerDoCarrinho(${item.id})" style="margin-top: 0.5rem; background: var(--danger); color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; width: 100%;">
                        Remover
                    </button>
                </div>
            `;
            itemsList.appendChild(itemCard);
        });
    }

    atualizarResumo();
    atualizarBadges();
}

/**
 * Atualizar resumo do pedido
 */
function atualizarResumo() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const taxaEntrega = 5;

    let subtotal = 0;
    carrinho.forEach(item => {
        subtotal += item.preco * item.quantidade;
    });

    const total = subtotal + taxaEntrega;
    const quantidadeItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const taxaEl = document.getElementById('taxaEntrega');
    const quantidadeEl = document.getElementById('quantidadeItens');

    if (subtotalEl) subtotalEl.textContent = formatarPreco(subtotal);
    if (totalEl) totalEl.textContent = formatarPreco(total);
    if (taxaEl) taxaEl.textContent = formatarPreco(taxaEntrega);
    if (quantidadeEl) quantidadeEl.textContent = quantidadeItens;
}

/**
 * Finalizar pedido
 */
if (document.getElementById('finalizarBtn')) {
    document.getElementById('finalizarBtn').addEventListener('click', () => {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        if (carrinho.length === 0) {
            mostrarToast('Carrinho vazio!', 'error');
            return;
        }
        mostrarToast('Pedido finalizado! Obrigado pela compra!');
        localStorage.setItem('carrinho', JSON.stringify([]));
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    });
}

/**
 * Limpar carrinho (botão)
 */
if (document.getElementById('limparBtn')) {
    document.getElementById('limparBtn').addEventListener('click', limparCarrinho);
}

/**
 * Toggle Favorito
 */
function toggleFavorito(produtoId, event) {
    event.preventDefault();
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const index = favoritos.indexOf(produtoId);

    if (index > -1) {
        favoritos.splice(index, 1);
        mostrarToast('Removido dos favoritos');
    } else {
        favoritos.push(produtoId);
        mostrarToast('Adicionado aos favoritos!');
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    atualizarBadges();
    atualizarFavoritos();
    atualizarCarrinho();
    renderizarCardapio(produtos);
}

/**
 * Renderizar favoritos
 */
function atualizarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const favoritosVazio = document.getElementById('favoritosVazio');
    const favoritosSection = document.getElementById('favoritosSection');
    const favoritosGrid = document.getElementById('favoritosGrid');

    if (favoritosGrid) {
        favoritosGrid.innerHTML = '';

        if (favoritos.length === 0) {
            if (favoritosVazio) favoritosVazio.style.display = 'block';
            if (favoritosSection) favoritosSection.style.display = 'none';
            return;
        }

        if (favoritosVazio) favoritosVazio.style.display = 'none';
        if (favoritosSection) favoritosSection.style.display = 'block';

        favoritos.forEach(id => {
            const produto = produtos.find(p => p.id === id);
            if (produto) {
                const card = criarCardapioProduto(produto);
                favoritosGrid.appendChild(card);
            }
        });
    }
}

// Atualizar carrinho ao carregar
if (document.getElementById('itemsList')) {
    atualizarCarrinho();
}

// Atualizar favoritos ao carregar
if (document.getElementById('favoritosGrid')) {
    atualizarFavoritos();
}

/**
 * Fechar modal
 */
function fecharModalProduto() {
    const modal = document.getElementById('produtoModal');
    if (modal) {
        modal.classList.remove('active');
    }
}