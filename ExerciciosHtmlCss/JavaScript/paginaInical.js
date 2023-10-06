// posicionar as peças ao carregar a pagina

window.addEventListener('load', function () {

    var alterarPosicao = false
   
    document.getElementById('tabuleiro').addEventListener('click', (event) => {
        let divSelecionada = event.target
        let factory = new FactoryPeca()
        peca = factory.create(divSelecionada.innerText)
        if (peca) {
            peca.mostrarCaminho(divSelecionada)
        }
    })
})
