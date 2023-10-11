// posicionar as peças ao carregar a pagina

window.addEventListener('load', function () {

    var alterarPosicao = ''
    let vez = true

    document.getElementById('tabuleiro').addEventListener('click', (event) => {
        let divSelecionada = event.target
        let factory = new FactoryPeca()
        peca = factory.create(divSelecionada.innerText)

        if (verificarPeca(divSelecionada)) {
            alterarPosicao = divSelecionada
            movimentar(alterarPosicao)
        } else {
            if (peca) {
                if (peca.cor == 1 && vez) {
                    LimparCaminho()
                    peca.mostrarCaminho(divSelecionada)
                }
                if (peca.cor == 2 && vez == false) {
                    LimparCaminho()
                    peca.mostrarCaminho(divSelecionada)
                }
            }
        }
    });


    function movimentar(localSelecionado) {
        let peca_id = ""
        let peca = ''
        let local_encontrado = false
        let caminho = document.querySelectorAll('[caminho]')

        caminho.forEach(element => {

            if (element.innerText != "") {
                peca = element.innerText
                peca_id = element.id
            }
            if (element.id == localSelecionado.id) {
                local_encontrado = true
            }
        });

        if (local_encontrado) {
            document.getElementById(localSelecionado.id).innerHTML = peca
            document.getElementById(peca_id).innerHTML = ''

        }

        LimparCaminho()
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
})

