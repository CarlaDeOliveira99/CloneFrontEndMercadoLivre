window.addEventListener('load', function () {
    let imgCod = document.getElementById('imgCod')
    let imgProd = document.getElementById('imgPro')
    let imgQuat = document.getElementById('imgQua')
    let imgUni = document.getElementById('imgUni')
    let imgPrecoIni = document.getElementById('imgPreIni')
    let imgPrecoFin = document.getElementById('imgPreFin')
    let imgSelecionada = 0
    var classProduto = new Produto();

    imgCod.src = "icone/ambas as setas.png"
    imgProd.src = "icone/ambas as setas.png"
    imgQuat.src = "icone/ambas as setas.png"
    imgUni.src = "icone/ambas as setas.png"
    imgPrecoIni.src = "icone/ambas as setas.png"
    imgPrecoFin.src = "icone/ambas as setas.png"


    imgCod.addEventListener('click', (event) => {
        let local = event.target
        let flechaAtual = local.src

        if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ambas%20as%20setas.png') {
            imgCod.src = 'icone/ordenar cima.png'
            imgSelecionada = 1
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20cima.png') {
            imgCod.src = 'icone/ordenar baixo.png'
            imgSelecionada = 2
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20baixo.png') {
            imgCod.src = 'icone/ambas as setas.png'
            imgSelecionada = 3
        }


        classProduto.ordenarCodigo(imgSelecionada)

    })

    imgProd.addEventListener('click', (event) => {
        let local = event.target
        let flechaAtual = local.src

        if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ambas%20as%20setas.png') {
            imgProd.src = 'icone/ordenar cima.png'
            imgSelecionada = 1
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20cima.png') {
            imgProd.src = 'icone/ordenar baixo.png'
            imgSelecionada = 2
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20baixo.png') {
            imgProd.src = 'icone/ambas as setas.png'
            imgSelecionada = 3
        }

        classProduto.ordenarProduto(imgSelecionada)

    })

    imgQuat.addEventListener('click', (event) => {
        let local = event.target
        let flechaAtual = local.src

        if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ambas%20as%20setas.png') {
            imgQuat.src = 'icone/ordenar cima.png'
            imgSelecionada = 1
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20cima.png') {
            imgQuat.src = 'icone/ordenar baixo.png'
            imgSelecionada = 2
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20baixo.png') {
            imgQuat.src = 'icone/ambas as setas.png'
            imgSelecionada = 3
        }

        classProduto.ordenarQuantidade(imgSelecionada)

    })

    imgUni.addEventListener('click', (event) => {
        let local = event.target
        let flechaAtual = local.src



        if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ambas%20as%20setas.png') {
            imgUni.src = 'icone/ordenar cima.png'
            imgSelecionada = 1
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20cima.png') {
            imgUni.src = 'icone/ordenar baixo.png'
            imgSelecionada = 2
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20baixo.png') {
            imgUni.src = 'icone/ambas as setas.png'
            imgSelecionada = 3
        }

        classProduto.ordenarUnidade(imgSelecionada)

    })

    imgPrecoIni.addEventListener('click', (event) => {
        let local = event.target
        let flechaAtual = local.src
        if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ambas%20as%20setas.png') {
            imgPrecoIni.src = 'icone/ordenar cima.png'
            imgSelecionada = 1
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20cima.png') {
            imgPrecoIni.src = 'icone/ordenar baixo.png'
            imgSelecionada = 2
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20baixo.png') {
            imgPrecoIni.src = 'icone/ambas as setas.png'
            imgSelecionada = 3
        }

        classProduto.ordenarPrecoInicial(imgSelecionada)

    })

    imgPrecoFin.addEventListener('click', (event) => {
        let local = event.target
        let flechaAtual = local.src

        if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ambas%20as%20setas.png') {
            imgPrecoFin.src = 'icone/ordenar cima.png'
            imgSelecionada = 1
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20cima.png') {
            imgPrecoFin.src = 'icone/ordenar baixo.png'
            imgSelecionada = 2
        } else if (flechaAtual == 'http://127.0.0.1:5500/Exerc%C3%ADcio%208%20-%20Manipular%20Tabela/icone/ordenar%20baixo.png') {
            imgPrecoFin.src = 'icone/ambas as setas.png'
            imgSelecionada = 3
        }


        classProduto.ordenarPrecoFinal(imgSelecionada)

    })


})
