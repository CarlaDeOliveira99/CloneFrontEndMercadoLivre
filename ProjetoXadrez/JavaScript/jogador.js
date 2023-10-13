let jogador_cor_Branco = document.getElementById('pecaBranca')
let jogador_cor_Preto = document.getElementById('pecaPreta')
let campoNome = document.getElementById('campoNome')
let areaEscolherPeca = document.getElementById('areaEscolherPeca')

jogador_cor_Branco.addEventListener('click', function pecaBranca() {
    criar_campo_nome(jogador_cor_Branco)
})


function criar_campo_nome(jogador) {
    jogador_cor_Branco.remove()
    jogador_cor_Preto.remove()
    let input = document.createElement('input')
    
    campoNome.appendChild(img)
    campoNome.appendChild(input)
    areaEscolherPeca.style.flexDirection = "inherit"
}
