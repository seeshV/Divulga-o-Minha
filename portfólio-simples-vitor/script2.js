// Função para rolagem suave nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Seleciona todos os botões de "Leia mais"
const botoesLeiaMais = document.querySelectorAll('.btn-leia-mais');

// Adiciona um ouvinte de evento para cada botão
botoesLeiaMais.forEach(botao => {
    botao.addEventListener('click', function() {
        // Obtém o parágrafo do conteúdo
        const conteudo = this.previousElementSibling.querySelector('.mais');
        
        // Verifica se o conteúdo está visível ou oculto
        if (conteudo.style.display === "none" || conteudo.style.display === "") {
            conteudo.style.display = "inline";  // Exibe o conteúdo
            this.textContent = "Leia menos";   // Altera o texto do botão
        } else {
            conteudo.style.display = "none";    // Oculta o conteúdo
            this.textContent = "Leia mais";    // Restaura o texto do botão
        }
    });
});
