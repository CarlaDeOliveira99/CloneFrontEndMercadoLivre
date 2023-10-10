// posicionar as peças ao carregar a pagina

window.addEventListener('load', function () {

    var alterarPosicao = ''

    document.getElementById('tabuleiro').addEventListener('click', (event) => {
        let divSelecionada = event.target
        let factory = new FactoryPeca()
        peca = factory.create(divSelecionada.innerText)
        if (peca) {
            peca.mostrarCaminho(divSelecionada)
        } else {
            alterarPosicao = divSelecionada

            movimentar(alterarPosicao)
        }
    })

    function movimentar(localSelecionado) {
        let peca_id = ""
        let peca_texto = ''
        let caminho = document.querySelectorAll('[caminho]')

        caminho.forEach(element => {
            if (element.innerText != "") {
                peca_texto = element.innerText
                peca_id = element.id
            }
            element.removeAttribute("caminho")
            if (element.className == "casaEscura") {
                element.setAttribute("style", "background-color:#999999;");
            }else{
                element.setAttribute("style", "background-color:white;");
            }
        });

        let id_selecionado = localSelecionado.id
        document.getElementById(id_selecionado).innerHTML = peca_texto
        document.getElementById(peca_id).innerHTML = ''














    }
})
