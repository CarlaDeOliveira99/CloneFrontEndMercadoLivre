let jogador_cor_Branco = document.getElementById('pecaBranca')
let jogador_cor_Preto = document.getElementById('pecaPreta')
let campoNome = document.getElementById('campoNome')
let areaEscolherPeca = document.getElementById('areaEscolherPeca')
let tituloJogador = document.getElementById('tituloJogador')
let imgSelecionada = document.getElementById('imgSelecionada')
let jogador1 = document.getElementById('nomeJodador1')
let jogador2 = document.getElementById('nomeJodador2')
var jogadorSelecionado = 0

jogador_cor_Branco.addEventListener('click', function pecaBranca() {
    criar_campo_nome(1)

})

jogador_cor_Preto.addEventListener('click', function pecaBranca() {
    criar_campo_nome(2)

})


function criar_campo_nome(jogador) {
    jogador_cor_Branco.remove()
    jogador_cor_Preto.remove()
    tituloJogador.innerHTML = "Digite seu nome:"
    let input = document.createElement('input')
    let btn_salvar = document.createElement('button')
    btn_salvar.innerHTML = "Salvar"
    btn_salvar.setAttribute("id", "btnSalvar")
    btn_salvar.classList.add('btnModal')
    input.setAttribute("id", "inputNome")

    campoNome.appendChild(input)
    campoNome.appendChild(btn_salvar)

    if (jogador == 1) {
        imgSelecionada.src = "icone/1.png"
        jogadorSelecionado = 1
    } else {
        imgSelecionada.src = "icone/2.png"
        jogadorSelecionado = 2
    }

    document.getElementById('btnSalvar').addEventListener('click', function salvarNome() {

        if (jogadorSelecionado == 1) {
            let nome1 = document.getElementById('inputNome').value
            if (nome1 != '') {
                jogador1.innerHTML = nome1
                jogadorSelecionado = 2
                proximoJogador(jogadorSelecionado)
                btn_salvar.remove()
                let btn_fechar = document.createElement('button')
                btn_fechar.innerHTML = "Salvar"
                btn_fechar.setAttribute("id", "btnfechar")
                btn_fechar.classList.add('btnModal')
                campoNome.appendChild(btn_fechar)
            }
        } else {
            let nome2 = document.getElementById('inputNome').value
            if (nome2 != '') {
                jogador2.innerHTML = nome2
                jogadorSelecionado = 1
                proximoJogador(jogadorSelecionado)
                btn_salvar.remove()
                let btn_fechar = document.createElement('button')
                btn_fechar.innerHTML = "Salvar"
                btn_fechar.setAttribute("id", "btnfechar")
                btn_fechar.classList.add('btnModal')
                campoNome.appendChild(btn_fechar)
            }

        }




        document.getElementById('btnfechar').addEventListener('click', function salvarNome() {

            if (jogadorSelecionado == 1) {
                let nome1 = document.getElementById('inputNome').value
                if (nome1 != '') {
                    jogador1.innerHTML = nome1
                    jogadorSelecionado = 2
                    toggleModal()
                }
            } else {
                let nome2 = document.getElementById('inputNome').value
                if (nome2 != '') {
                    jogador2.innerHTML = nome2
                    jogadorSelecionado = 1
                    toggleModal()
                }
            }
        })
    })
}





function proximoJogador(jogadorSelecionado) {
    document.getElementById('inputNome').value = ""

    if (jogadorSelecionado == 1) {
        imgSelecionada.src = "icone/1.png"
    } else {
        imgSelecionada.src = "icone/2.png"
        jogadorSelecionado = 2
    }
}



