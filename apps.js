function criaCartao(catergoria, pergunta, resposta,) {
   let container = document.getElementById('container')
   let cartao = document.createElement('article')
   cartao.className = cartao
cartao.innerHTML = `
   <div class="cartao__conteudo">
            <h3>${categorias}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${respostas}</p> 
            </div>
        </div>
`

let respostaEstaVisivel = false


function viraCartao() {
    respotaEstaVisivel = !respotaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}

cartao,addEventListener('click', viraCartao)



container.appendChild(cartao)

}
criaCartao(
    'Lingua Inglesa',
    'como se diz oi em inglês?',
    'Oi se diz HI',
)