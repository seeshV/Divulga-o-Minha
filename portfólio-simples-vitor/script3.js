// Produtos disponíveis
const produtos = [
    { id: 1, nome: "Tênis Esportivo", preco: 199.99 },
    { id: 2, nome: "Camiseta Nike", preco: 129.99 },
    { id: 3, nome: "Jaqueta Nike", preco: 299.99 },
    { id: 4, nome: "Tênis Casual", preco: 249.99 }
];

// Carrinho de compras
let carrinho = [];

// Função para atualizar o carrinho na página
function atualizarCarrinho() {
    const carrinhoDiv = document.getElementById("itensCarrinho");
    const totalDiv = document.getElementById("totalCarrinho");
    
    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalDiv.innerHTML = "<p>Total: R$ 0,00</p>";
    } else {
        let html = "<ul>";
        let total = 0;
        
        carrinho.forEach(item => {
            html += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
            total += item.preco;
        });
        
        html += "</ul>";
        carrinhoDiv.innerHTML = html;
        totalDiv.innerHTML = `<p>Total: R$ ${total.toFixed(2)}</p>`;
    }
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
    }
}

// Evento para adicionar produtos ao carrinho
const botoesAdicionar = document.querySelectorAll(".adicionar");
botoesAdicionar.forEach(botao => {
    botao.addEventListener("click", () => {
        const idProduto = parseInt(botao.getAttribute("data-id"));
        adicionarAoCarrinho(idProduto);
    });
});

// Evento para finalizar a compra
document.getElementById("finalizarCompra").addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        window.location.href = "checkout.html";  // Redireciona para a página de checkout
    }
});
