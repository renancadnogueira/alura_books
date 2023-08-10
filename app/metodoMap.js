function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //os três pontos pegam livro, e depois o preço terá o novo valor com a função decretada.
    })
        return livrosComDesconto
}