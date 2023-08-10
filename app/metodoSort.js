let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenandos = livros.sort((a, b) => a.preco - b.preco) // Ordernar os preços do livros do maior para o menor
    exibirOsLivrosNaTela(livrosOrdenandos)
}