window.addEventListener('load', function () {
    let imgCod = document.getElementById('imgCod')
    let imgProd = document.getElementById('imgPro')
    let imgQuat = document.getElementById('imgQua')
    let imgUni = document.getElementById('imgUni')
    let imgPrecoIni = document.getElementById('imgPreIni')
    let imgPrecoFin = document.getElementById('imgPreFin')
    let imgSelecionada = 0
    let tr = document.getElementById('linhaTituloTab')
    let iconeSelecionado = 0


    imgCod.src = "icone/ambasAsSetas.png"
    imgProd.src = "icone/ambasAsSetas.png"
    imgQuat.src = "icone/ambasAsSetas.png"
    imgUni.src = "icone/ambasAsSetas.png"
    imgPrecoIni.src = "icone/ambasAsSetas.png"
    imgPrecoFin.src = "icone/ambasAsSetas.png"



    tr.addEventListener('click', (event) => {
        td = event.target

        acessoCategoria = td.childNodes

        if (acessoCategoria.length > 0) {
            tdSrcDaImg = acessoCategoria[1].attributes.src.nodeValue
            acessoImgSrc = ''
            categoria = td.innerText
        } else {
            acessoImgSrc = td.attributes.src.nodeValue
            tdSrcDaImg = ''
            categoria = td.parentElement.innerText

        }

        if (tdSrcDaImg == "icone/ambasAsSetas.png" || acessoImgSrc == "icone/ambasAsSetas.png") {
            if (categoria == "Cód") {
                imgCod.src = "icone/ordenarCima.png"
            } else if (categoria == "Produto") {
                imgProd.src = "icone/ordenarCima.png"
            } else if (categoria == "Quantidade") {
                imgQuat.src = "icone/ordenarCima.png"
            } else if (categoria == "Unidade") {
                imgUni.src = "icone/ordenarCima.png"
            } else if (categoria == "Preço de Compra") {
                imgPrecoIni.src = "icone/ordenarCima.png"
            } else if (categoria == "Preço de Venda") {
                imgPrecoFin.src = "icone/ordenarCima.png"
            }
            iconeSelecionado = 1
        } else if (tdSrcDaImg == "icone/ordenarCima.png" || acessoImgSrc == "icone/ordenarCima.png") {
            if (categoria == "Cód") {
                imgCod.src = "icone/ordenarBaixo.png"
            } else if (categoria == "Produto") {
                imgProd.src = "icone/ordenarBaixo.png"
            } else if (categoria == "Quantidade") {
                imgQuat.src = "icone/ordenarBaixo.png"
            } else if (categoria == "Unidade") {
                imgUni.src = "icone/ordenarBaixo.png"
            } else if (categoria == "Preço de Compra") {
                imgPrecoIni.src = "icone/ordenarBaixo.png"
            } else if (categoria == "Preço de Venda") {
                imgPrecoFin.src = "icone/ordenarBaixo.png"
            }
            iconeSelecionado = 2
        } else if (tdSrcDaImg == "icone/ordenarBaixo.png" || acessoImgSrc == "icone/ordenarBaixo.png") {
            if (categoria == "Cód") {
                imgCod.src = "icone/ambasAsSetas.png"
            } else if (categoria == "Produto") {
                imgProd.src = "icone/ambasAsSetas.png"
            } else if (categoria == "Quantidade") {
                imgQuat.src = "icone/ambasAsSetas.png"
            } else if (categoria == "Unidade") {
                imgUni.src = "icone/ambasAsSetas.png"
            } else if (categoria == "Preço de Compra") {
                imgPrecoIni.src = "icone/ambasAsSetas.png"
            } else if (categoria == "Preço de Venda") {
                imgPrecoFin.src = "icone/ambasAsSetas.png"
            }
            iconeSelecionado = 3
        }

        classProduto.ordenarTabela(categoria, iconeSelecionado)
    })
})
