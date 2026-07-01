// ========================================
// SCRIPT PRINCIPAL - La Maison
// ========================================

// Dados dos produtos
const produtos = [
    // ENTRADAS (5)
    { id: 1, nome: 'Bruschettas Gourmet', descricao: 'Pão tostado com tomate e basílico', categoria: 'entradas', preco: 28.00, rating: 4.8, vendidos: 150, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Bruschettas', especial: false, novo: true },
    { id: 2, nome: 'Tábua de Queijos', descricao: 'Seleção de queijos importados', categoria: 'entradas', preco: 45.00, rating: 4.9, vendidos: 200, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Queijos', especial: false, novo: false },
    { id: 3, nome: 'Camarões ao Alho', descricao: 'Camarões frescos com alho e limão', categoria: 'entradas', preco: 52.00, rating: 4.7, vendidos: 120, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Camaroes', especial: false, novo: false },
    { id: 4, nome: 'Patê de Fígado', descricao: 'Patê caseiro com torradas', categoria: 'entradas', preco: 32.00, rating: 4.6, vendidos: 90, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Pate', especial: false, novo: false },
    { id: 5, nome: 'Ostras Frescas', descricao: 'Ostras com limão e azeite', categoria: 'entradas', preco: 68.00, rating: 4.9, vendidos: 80, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Ostras', especial: true, novo: false },

    // MASSAS (5)
    { id: 6, nome: 'Pasta à Carbonara', descricao: 'Clássica receita italiana', categoria: 'massas', preco: 42.00, rating: 4.8, vendidos: 300, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Carbonara', especial: false, novo: false },
    { id: 7, nome: 'Fettuccine Alfredo', descricao: 'Molho cremoso e delicioso', categoria: 'massas', preco: 45.00, rating: 4.7, vendidos: 250, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Alfredo', especial: false, novo: false },
    { id: 8, nome: 'Lasanha da Casa', descricao: 'Camadas de sabor intenso', categoria: 'massas', preco: 48.00, rating: 4.9, vendidos: 280, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Lasanha', especial: true, novo: false },
    { id: 9, nome: 'Ravioli Recheado', descricao: 'Recheio de queijo e espinafre', categoria: 'massas', preco: 44.00, rating: 4.6, vendidos: 180, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Ravioli', especial: false, novo: true },
    { id: 10, nome: 'Penne Arabiata', descricao: 'Tomate, alho e pimenta', categoria: 'massas', preco: 40.00, rating: 4.5, vendidos: 160, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Arabiata', especial: false, novo: false },

    // CARNES (5)
    { id: 11, nome: 'Bife Ancho', descricao: 'Carne vermelha premium', categoria: 'carnes', preco: 85.00, rating: 4.9, vendidos: 210, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Ancho', especial: false, novo: false },
    { id: 12, nome: 'Costela à Bourbon', descricao: 'Costela grelhada com tempero especial', categoria: 'carnes', preco: 78.00, rating: 4.8, vendidos: 190, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Costela', especial: true, novo: false },
    { id: 13, nome: 'Picanha Grelhada', descricao: 'Corte tradicional e suculento', categoria: 'carnes', preco: 72.00, rating: 4.7, vendidos: 230, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Picanha', especial: false, novo: false },
    { id: 14, nome: 'Cordeiro ao Rosmaninho', descricao: 'Cordeiro macio com ervas', categoria: 'carnes', preco: 95.00, rating: 4.9, vendidos: 140, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Cordeiro', especial: false, novo: true },
    { id: 15, nome: 'Carré de Porco', descricao: 'Porco suíno de qualidade premium', categoria: 'carnes', preco: 68.00, rating: 4.6, vendidos: 110, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Pork', especial: false, novo: false },

    // FRANGOS (5)
    { id: 16, nome: 'Frango à Parmegiana', descricao: 'Frango crocante com queijo', categoria: 'frangos', preco: 52.00, rating: 4.8, vendidos: 270, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Parmegiana', especial: false, novo: false },
    { id: 17, nome: 'Peito de Frango Recheado', descricao: 'Recheio de presunto e queijo', categoria: 'frangos', preco: 48.00, rating: 4.7, vendidos: 200, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=RecheadoFrango', especial: false, novo: false },
    { id: 18, nome: 'Frango ao Molho Cremoso', descricao: 'Molho à base de cogumelos', categoria: 'frangos', preco: 54.00, rating: 4.9, vendidos: 250, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Cremoso', especial: true, novo: false },
    { id: 19, nome: 'Asas BBQ', descricao: 'Asas com molho barbecue', categoria: 'frangos', preco: 45.00, rating: 4.6, vendidos: 180, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=BBQ', especial: false, novo: true },
    { id: 20, nome: 'Frango Teriyaki', descricao: 'Frango com molho oriental', categoria: 'frangos', preco: 50.00, rating: 4.7, vendidos: 160, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Teriyaki', especial: false, novo: false },

    // PEIXES (5)
    { id: 21, nome: 'Salmão Grelhado', descricao: 'Salmão fresco com limão', categoria: 'peixes', preco: 72.00, rating: 4.9, vendidos: 240, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Salmao', especial: false, novo: false },
    { id: 22, nome: 'Robalo ao Forno', descricao: 'Robalo com batata e legumes', categoria: 'peixes', preco: 68.00, rating: 4.8, vendidos: 190, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Robalo', especial: false, novo: false },
    { id: 23, nome: 'Badejo à Meunière', descricao: 'Badejo com manteiga e limão', categoria: 'peixes', preco: 65.00, rating: 4.7, vendidos: 160, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Badejo', especial: true, novo: false },
    { id: 24, nome: 'Truta Fumada', descricao: 'Truta fresca e fumada', categoria: 'peixes', preco: 78.00, rating: 4.9, vendidos: 130, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Truta', especial: false, novo: true },
    { id: 25, nome: 'Branzino Inteiro', descricao: 'Branzino com ervas aromáticas', categoria: 'peixes', preco: 88.00, rating: 4.8, vendidos: 100, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Branzino', especial: false, novo: false },

    // HAMBÚRGUERES (5)
    { id: 26, nome: 'Burger Premium', descricao: 'Carne 180g com cheddar', categoria: 'hamburgueres', preco: 38.00, rating: 4.7, vendidos: 320, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Premium', especial: false, novo: false },
    { id: 27, nome: 'Burger Clássico', descricao: 'Simples e delicioso', categoria: 'hamburgueres', preco: 32.00, rating: 4.6, vendidos: 350, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Classico', especial: false, novo: false },
    { id: 28, nome: 'Burger Suíço', descricao: 'Com queijo suíço e bacon', categoria: 'hamburgueres', preco: 42.00, rating: 4.8, vendidos: 280, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Suico', especial: true, novo: false },
    { id: 29, nome: 'Burger Vegano', descricao: 'Hambúrguer feito com vegetais', categoria: 'hamburgueres', preco: 35.00, rating: 4.5, vendidos: 150, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Vegano', especial: false, novo: true },
    { id: 30, nome: 'Burger Duplo', descricao: 'Duas carnes, muito sabor', categoria: 'hamburgueres', preco: 48.00, rating: 4.9, vendidos: 220, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Duplo', especial: false, novo: false },

    // PIZZAS (5)
    { id: 31, nome: 'Pizza Margherita', descricao: 'Clássica com mozzarella', categoria: 'pizzas', preco: 42.00, rating: 4.7, vendidos: 400, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Margherita', especial: false, novo: false },
    { id: 32, nome: 'Pizza Pepperoni', descricao: 'Coberta de pepperoni', categoria: 'pizzas', preco: 45.00, rating: 4.8, vendidos: 380, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Pepperoni', especial: false, novo: false },
    { id: 33, nome: 'Pizza Quattro Queijos', descricao: 'Mistura de 4 queijos diferentes', categoria: 'pizzas', preco: 48.00, rating: 4.9, vendidos: 320, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=QuatroQueijos', especial: true, novo: false },
    { id: 34, nome: 'Pizza Vegana', descricao: 'Vegetais frescos sem queijo', categoria: 'pizzas', preco: 40.00, rating: 4.5, vendidos: 180, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Vegana', especial: false, novo: true },
    { id: 35, nome: 'Pizza Tropical', descricao: 'Abacaxi, presunto e queijo', categoria: 'pizzas', preco: 44.00, rating: 4.6, vendidos: 250, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Tropical', especial: false, novo: false },

    // SALADAS (5)
    { id: 36, nome: 'Salada Caesar', descricao: 'Alface com molho caesar', categoria: 'saladas', preco: 32.00, rating: 4.6, vendidos: 200, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Caesar', especial: false, novo: false },
    { id: 37, nome: 'Salada Grega', descricao: 'Tomate, queijo feta e azeitona', categoria: 'saladas', preco: 35.00, rating: 4.7, vendidos: 180, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Grega', especial: false, novo: false },
    { id: 38, nome: 'Salada Tropical', descricao: 'Frutas frescas com iogurte', categoria: 'saladas', preco: 38.00, rating: 4.8, vendidos: 160, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Tropical', especial: true, novo: false },
    { id: 39, nome: 'Salada de Rúcula', descricao: 'Rúcula com parmesão', categoria: 'saladas', preco: 34.00, rating: 4.5, vendidos: 140, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Rucula', especial: false, novo: true },
    { id: 40, nome: 'Salada Caprese', descricao: 'Tomate, mozzarella e manjericão', categoria: 'saladas', preco: 36.00, rating: 4.7, vendidos: 170, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Caprese', especial: false, novo: false },

    // SOBREMESAS (5)
    { id: 41, nome: 'Tiramisu', descricao: 'Clássico italiano cremoso', categoria: 'sobremesas', preco: 28.00, rating: 4.9, vendidos: 280, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Tiramisu', especial: false, novo: false },
    { id: 42, nome: 'Pavê de Chocolate', descricao: 'Camadas de chocolate', categoria: 'sobremesas', preco: 32.00, rating: 4.8, vendidos: 250, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Pave', especial: false, novo: false },
    { id: 43, nome: 'Cheesecake', descricao: 'Clássico com calda de frutas', categoria: 'sobremesas', preco: 35.00, rating: 4.9, vendidos: 220, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Cheesecake', especial: true, novo: false },
    { id: 44, nome: 'Mousse de Chocolate', descricao: 'Leve e cremosa', categoria: 'sobremesas', preco: 26.00, rating: 4.7, vendidos: 190, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Mousse', especial: false, novo: true },
    { id: 45, nome: 'Sorvete Gourmet', descricao: 'Sabores premium variados', categoria: 'sobremesas', preco: 22.00, rating: 4.6, vendidos: 310, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Sorvete', especial: false, novo: false },

    // LANCHES (5)
    { id: 46, nome: 'Sanduíche Executivo', descricao: 'Presunto, queijo e alface', categoria: 'lanches', preco: 25.00, rating: 4.5, vendidos: 240, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Executivo', especial: false, novo: false },
    { id: 47, nome: 'Pão com Calabresa', descricao: 'Calabresa grelhada', categoria: 'lanches', preco: 22.00, rating: 4.6, vendidos: 280, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Calabresa', especial: false, novo: false },
    { id: 48, nome: 'Croissant Premium', descricao: 'Massa folhada belga', categoria: 'lanches', preco: 18.00, rating: 4.8, vendidos: 320, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Croissant', especial: true, novo: false },
    { id: 49, nome: 'Pão de Queijo Caseiro', descricao: 'Receita tradicional mineira', categoria: 'lanches', preco: 15.00, rating: 4.7, vendidos: 450, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Queijo', especial: false, novo: true },
    { id: 50, nome: 'Bolo de Chocolate', descricao: 'Fatia grande e saborosa', categoria: 'lanches', preco: 20.00, rating: 4.7, vendidos: 200, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Bolo', especial: false, novo: false },

    // BEBIDAS (10)
    { id: 51, nome: 'Café Expresso', descricao: 'Café fresco e encorpado', categoria: 'bebidas', preco: 8.00, rating: 4.7, vendidos: 1200, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Cafe', especial: false, novo: false },
    { id: 52, nome: 'Cappuccino', descricao: 'Café com leite cremoso', categoria: 'bebidas', preco: 12.00, rating: 4.8, vendidos: 950, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Cappuccino', especial: false, novo: false },
    { id: 53, nome: 'Suco Natural', descricao: 'Frutas frescas prensadas', categoria: 'bebidas', preco: 15.00, rating: 4.9, vendidos: 800, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Suco', especial: true, novo: false },
    { id: 54, nome: 'Água Mineral', descricao: 'Água pura e refrescante', categoria: 'bebidas', preco: 4.00, rating: 5.0, vendidos: 2000, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Agua', especial: false, novo: false },
    { id: 55, nome: 'Refrigerante', descricao: 'Marcas variadas geladas', categoria: 'bebidas', preco: 6.00, rating: 4.5, vendidos: 1500, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Refri', especial: false, novo: false },
    { id: 56, nome: 'Chá Gelado', descricao: 'Chás variados gelados', categoria: 'bebidas', preco: 10.00, rating: 4.6, vendidos: 600, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Cha', especial: false, novo: true },
    { id: 57, nome: 'Milkshake', descricao: 'Bebida cremosa e deliciosa', categoria: 'bebidas', preco: 18.00, rating: 4.8, vendidos: 720, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Milkshake', especial: false, novo: false },
    { id: 58, nome: 'Drink Mocktail', descricao: 'Bebida sem álcool gourmet', categoria: 'bebidas', preco: 22.00, rating: 4.9, vendidos: 480, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Mocktail', especial: true, novo: false },
    { id: 59, nome: 'Champagne Espumante', descricao: 'Para celebrar', categoria: 'bebidas', preco: 85.00, rating: 4.9, vendidos: 250, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Champagne', especial: false, novo: true },
    { id: 60, nome: 'Vinho Tinto Premium', descricao: 'Seleção importada', categoria: 'bebidas', preco: 120.00, rating: 4.8, vendidos: 180, imagem: 'https://via.placeholder.com/250x200/C9A227/0D0D0D?text=Vinho', especial: false, novo: false }
];

// Avaliações falsas
const avaliacoes = [
    { nome: 'Carlos Silva', avatar: 'https://via.placeholder.com/50x50/C9A227/0D0D0D?text=CS', comentario: 'Experiência fantástica! Comida de qualidade excepcional.', rating: 5 },
    { nome: 'Ana Costa', avatar: 'https://via.placeholder.com/50x50/C9A227/0D0D0D?text=AC', comentario: 'Ambiente aconchegante e atendimento impecável.', rating: 5 },
    { nome: 'João Santos', avatar: 'https://via.placeholder.com/50x50/C9A227/0D0D0D?text=JS', comentario: 'Pratos deliciosos, voltarei com certeza!', rating: 4 },
    { nome: 'Maria Oliveira', avatar: 'https://via.placeholder.com/50x50/C9A227/0D0D0D?text=MO', comentario: 'Melhor restaurante da região!', rating: 5 }
];

// FAQ
const faqItems = [
    { pergunta: 'Qual é o horário de atendimento?', resposta: 'Seg-Qui: 11:00 - 23:00 | Sex-Sab: 11:00 - 00:00 | Dom: 12:00 - 22:00' },
    { pergunta: 'Vocês fazem entregas?', resposta: 'Sim! Atendemos a entrega com taxa de R$ 5,00 em um raio de 5km.' },
    { pergunta: 'Como fazer uma reserva?', resposta: 'Clique em "Reservar Mesa" na página inicial ou ligue para (11) 3000-0000' },
    { pergunta: 'Vocês aceitam cartão de crédito?', resposta: 'Sim, aceitamos todas as bandeiras de cartão, dinheiro e PIX.' },
    { pergunta: 'Tem estacionamento?', resposta: 'Sim, possuímos estacionamento próprio gratuito para nossos clientes.' }
];

// Galeria
const galeria = [
    'https://via.placeholder.com/300x300/C9A227/0D0D0D?text=Ambiente+1',
    'https://via.placeholder.com/300x300/C9A227/0D0D0D?text=Prato+Especial',
    'https://via.placeholder.com/300x300/C9A227/0D0D0D?text=Ambiente+2',
    'https://via.placeholder.com/300x300/C9A227/0D0D0D?text=Sobremesa',
    'https://via.placeholder.com/300x300/C9A227/0D0D0D?text=Ambiente+3',
    'https://via.placeholder.com/300x300/C9A227/0D0D0D?text=Bebidas'
];

// Equipe
const equipe = [
    { nome: 'Chef Paulo', cargo: 'Chef Executivo', foto: 'https://via.placeholder.com/200x250/C9A227/0D0D0D?text=Chef+Paulo' },
    { nome: 'Ana Silva', cargo: 'Sous Chef', foto: 'https://via.placeholder.com/200x250/C9A227/0D0D0D?text=Sous+Chef' },
    { nome: 'Roberto Costa', cargo: 'Gerente', foto: 'https://via.placeholder.com/200x250/C9A227/0D0D0D?text=Gerente' },
    { nome: 'Mariana Santos', cargo: 'Pasteleira', foto: 'https://via.placeholder.com/200x250/C9A227/0D0D0D?text=Pasteleira' }
];

// Funções utilitárias

/**
 * Formatar preço em formato de moeda
 */
function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

/**
 * Criar elemento HTML com classe
 */
function criarElemento(tag, classe = '', conteudo = '') {
    const elemento = document.createElement(tag);
    if (classe) elemento.className = classe;
    if (conteudo) elemento.innerHTML = conteudo;
    return elemento;
}

/**
 * Gerar stars de avaliação
 */
function gerarStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

/**
 * Mostrar notificação Toast
 */
function mostrarToast(mensagem, tipo = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = mensagem;
    toast.className = 'toast show';
    toast.style.background = tipo === 'success' ? '#4CAF50' : '#f44336';

    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

/**
 * Scroll suave
 */
function scrollSuave(elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Lazy loading de imagens
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Inicialização quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    esconderLoadingScreen();
    configurarNavbar();
    configurarBotoes();
    configurarScrollReveal();
    atualizarBadges();
});

/**
 * Esconder loading screen
 */
function esconderLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1500);
    }
}

/**
 * Configurar navbar
 */
function configurarNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navCenter = document.querySelector('.nav-center');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (!navCenter.classList.contains('nav-mobile')) {
                const navMobile = criarElemento('div', 'nav-mobile active');
                navCenter.querySelectorAll('.nav-link').forEach(link => {
                    const linkClone = link.cloneNode(true);
                    navMobile.appendChild(linkClone);
                });
                navCenter.appendChild(navMobile);
            } else {
                navCenter.querySelector('.nav-mobile').classList.toggle('active');
            }
        });
    }

    // Navbar sticky
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
}

/**
 * Configurar botões gerais
 */
function configurarBotoes() {
    const btnTop = document.getElementById('btnTop');
    if (btnTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnTop.classList.add('show');
            } else {
                btnTop.classList.remove('show');
            }
        });

        btnTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/**
 * Scroll Reveal - Animar elementos ao entrar na viewport
 */
function configurarScrollReveal() {
    const elementos = document.querySelectorAll('.slide-up, .fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Atualizar badges do carrinho e favoritos
 */
function atualizarBadges() {
    const cartItems = JSON.parse(localStorage.getItem('carrinho')) || [];
    const favItems = JSON.parse(localStorage.getItem('favoritos')) || [];

    const cartBadge = document.getElementById('cartBadge');
    const favBadge = document.getElementById('favBadge');

    if (cartBadge) cartBadge.textContent = cartItems.length;
    if (favBadge) favBadge.textContent = favItems.length;
}

// Renderizar pratos em destaque na home
if (document.getElementById('pratosDestaque')) {
    const pratosDestaque = produtos.slice(0, 6);
    const container = document.getElementById('pratosDestaque');

    pratosDestaque.forEach(produto => {
        const card = criarProdutoCard(produto);
        container.appendChild(card);
    });
}

// Renderizar especiais
if (document.getElementById('especiais-grid')) {
    const especiais = produtos.filter(p => p.especial);
    const container = document.getElementById('especiais-grid');

    especiais.forEach(produto => {
        const card = criarProdutoCard(produto, true);
        container.appendChild(card);
    });
}

// Renderizar avaliações
if (document.getElementById('avaliacoes-grid')) {
    const container = document.getElementById('avaliacoes-grid');

    avaliacoes.forEach(avaliacao => {
        const card = criarElemento('div', 'avaliacao-card');
        card.innerHTML = `
            <div class="avaliacao-header">
                <img src="${avaliacao.avatar}" alt="${avaliacao.nome}" class="avaliacao-avatar">
                <div>
                    <p class="avaliacao-nome">${avaliacao.nome}</p>
                    <p class="avaliacao-rating">${gerarStars(avaliacao.rating)}</p>
                </div>
            </div>
            <p class="avaliacao-comentario">${avaliacao.comentario}</p>
        `;
        container.appendChild(card);
    });
}

// Renderizar galeria
if (document.getElementById('galeria-grid')) {
    const container = document.getElementById('galeria-grid');

    galeria.forEach(imagem => {
        const item = criarElemento('div', 'galeria-item');
        item.innerHTML = `<img src="${imagem}" alt="Galeria" loading="lazy">`;
        container.appendChild(item);
    });
}

// Renderizar FAQ
if (document.getElementById('faqContainer')) {
    const container = document.getElementById('faqContainer');

    faqItems.forEach((item, index) => {
        const card = criarElemento('div', 'faq-item');
        card.innerHTML = `
            <div class="faq-pergunta" onclick="toggleFAQ(this)">
                <h3>${item.pergunta}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-resposta">
                <p>${item.resposta}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Toggle FAQ
 */
function toggleFAQ(element) {
    const resposta = element.nextElementSibling;
    const icone = element.querySelector('i');

    resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
    icone.style.transform = resposta.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
}

/**
 * Renderizar equipe
 */
if (document.getElementById('equipeGrid')) {
    const container = document.getElementById('equipeGrid');

    equipe.forEach(membro => {
        const card = criarElemento('div', 'team-card');
        card.innerHTML = `
            <img src="${membro.foto}" alt="${membro.nome}">
            <h3>${membro.nome}</h3>
            <p>${membro.cargo}</p>
        `;
        container.appendChild(card);
    });
}

// Criar card de produto reutilizável
function criarProdutoCard(produto, especial = false) {
    const card = criarElemento('div', 'prato-card');
    const badgeTexto = especial ? '⭐ Especial' : (produto.novo ? '🆕 Novo' : '');
    const badgeHTML = badgeTexto ? `<div class="prato-badge">${badgeTexto}</div>` : '';

    card.innerHTML = `
        ${badgeHTML}
        <img src="${produto.imagem}" alt="${produto.nome}" class="prato-image" loading="lazy">
        <div class="prato-content">
            <h3 class="prato-nome">${produto.nome}</h3>
            <p class="prato-descricao">${produto.descricao}</p>
            <span class="prato-categoria">${produto.categoria}</span>
            <div class="prato-footer">
                <span class="prato-preco">${formatarPreco(produto.preco)}</span>
                <span class="prato-rating">${gerarStars(produto.rating)}</span>
            </div>
            <div class="prato-acoes">
                <button class="btn-coracoes" onclick="toggleFavorito(${produto.id}, event)">
                    <i class="far fa-heart"></i>
                </button>
                <button class="btn-carrinho" onclick="adicionarAoCarrinho(${produto.id})">+ Carrinho</button>
            </div>
        </div>
    `;

    return card;
}

/**
 * Newsletter
 */
if (document.getElementById('newsletterForm')) {
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarToast('Email inscrito com sucesso!');
        e.target.reset();
    });
}

/**
 * Contato
 */
if (document.getElementById('contatoForm')) {
    document.getElementById('contatoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarToast('Mensagem enviada com sucesso!');
        e.target.reset();
    });
}

/**
 * Reserva de Mesa
 */
if (document.getElementById('reservarBtn')) {
    const reservarBtn = document.getElementById('reservarBtn');
    const reservaModal = document.getElementById('reservaModal');
    const closeReserva = document.getElementById('closeReserva');

    if (reservarBtn) {
        reservarBtn.addEventListener('click', () => {
            reservaModal.classList.add('active');
        });
    }

    if (closeReserva) {
        closeReserva.addEventListener('click', () => {
            reservaModal.classList.remove('active');
        });
    }

    if (document.getElementById('reservaForm')) {
        document.getElementById('reservaForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            localStorage.setItem('ultimaReserva', JSON.stringify(Object.fromEntries(formData)));
            mostrarToast('Reserva confirmada!');
            reservaModal.classList.remove('active');
            e.target.reset();
        });
    }
}

window.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});