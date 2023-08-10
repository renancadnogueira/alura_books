const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = '' //quando clicamos em livros p/ front-end essa parte faz com que aparecem apenas os livros de front end
    listaDeLivros.forEach(livro => {
       // let disponibilidade = verificarDisponibilidadeDoLivro(livro)
       let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel' // operador ternário isso faz com que o código fique menos poluído porém mais difícil de identificar (é o mesmo resultado que a function que está comentada)
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            Uma aventura no sertão da programação
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

// function verificarDisponibilidadeDoLivro(livro) {
//    if (livro.quantidade > 0) {
//       return 'livros__imagens'
//    } else {
//       return 'livros__imagens indisponivel'
//    }
// }