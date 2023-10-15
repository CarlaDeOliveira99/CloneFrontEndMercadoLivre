// posicionar as peças ao carregar a pagina

window.addEventListener('load', function () {

    var alterarPosicao = ''
    this.vez = true
    let tabuleiro = document.getElementById('tabuleiro')
    this.prosseguir = true

    tabuleiro.addEventListener('click', (event) => {

        if (this.prosseguir) {
            let divSelecionada = event.target
            let factory = new FactoryPeca()
            peca = factory.create(divSelecionada.innerText)

            if (verificarPeca(divSelecionada)) {
                alterarPosicao = divSelecionada
                movimentar(alterarPosicao, this.vez)
            } else {
                if (peca) {
                    if (peca.cor == 1 && this.vez) {
                        LimparCaminho()
                        peca.mostrarCaminho(divSelecionada)
                    }
                    if (peca.cor == 2 && this.vez == false) {
                        LimparCaminho()
                        peca.mostrarCaminho(divSelecionada)
                    }
                }
            }
        }
    });

    function movimentar(localSelecionado, vez_da_peca) {
        let peca_id = ""
        let peca = ''
        let local_encontrado = false
        let caminho = document.querySelectorAll('[caminho]')
        let vez_do_cor = 0
        let factory = new FactoryPeca()

        if (vez_da_peca) {
            vez_do_cor = 1
        } else {
            vez_do_cor = 2
        }
        caminho.forEach(element => {
            if (element.innerText != "") {
                let peca_atual = factory.create(element.innerText)
                if (peca_atual.cor == vez_do_cor) {
                    peca = element.innerText
                    peca_id = element.id
                }
            }
            if (element.id == localSelecionado.id && element.attributes.caminho.nodeValue != "peca") {
                local_encontrado = true
            }
        });
        if (local_encontrado) {
            document.getElementById(localSelecionado.id).innerHTML = peca
            document.getElementById(peca_id).innerHTML = ''
            if (vez_do_cor == 1) {
                this.vez = false
            } else {
                this.vez = true
            }
        }
        LimparCaminho()
        if (percorrer_tabuleiro()) {
            this.prosseguir = true
        } else {
            this.prosseguir = false
        }
    }


    function LimparCaminho() {
        let caminho = document.querySelectorAll('[caminho]')
        caminho.forEach(element => {
            element.removeAttribute("caminho")
            if (element.className == "casaEscura") {
                element.setAttribute("style", "background-color:#999999;");
            } else {
                element.setAttribute("style", "background-color:white;");
            }
        })
    }


    // verifica se a peça cliclada é para eliminar o inimigo
    function verificarPeca(divSelecionada) {
        let caminho = document.querySelectorAll('[caminho]')
        let possui_caminho = false
        caminho.forEach(element => {
            if (element.id == divSelecionada.id) {
                possui_caminho = true
            }
        });
        return possui_caminho
    }

    function percorrer_tabuleiro() {
        let div_do_tabuleiro = tabuleiro.children
        let rei_Branco = false
        let rei_Preto = false
        for (let i = 0; i < div_do_tabuleiro.length; i++) {
            let factory = new FactoryPeca()
            peca = factory.create(div_do_tabuleiro[i].innerText)

            if (peca) {
                if (peca.constructor.name == "Rei" && peca.cor == 1) {
                    rei_Branco = true
                }
                if (peca.constructor.name == "Rei" && peca.cor == 2) {
                    rei_Preto = true
                }
            }

        }
        if (rei_Branco && rei_Preto) {
            return true
        } else {
            ganhador(rei_Branco, rei_Preto)
            return false
        }
    }


    function ganhador(rei_Branco, rei_Preto) {
        let jogador1 = document.getElementById('nomeJodador1').innerText
        let jogador2 = document.getElementById('nomeJodador2').innerText
        modalXeque()
        if (rei_Branco) {
            document.getElementById('vencedor').innerHTML = `O jogador <span>${jogador1} </span>ganhou a partida!!!`
        }
        if (rei_Preto) {
            document.getElementById('vencedor').innerHTML = `O jogador <span> ${jogador2}</span> ganhou a partida!!!`
        }
    }
})

