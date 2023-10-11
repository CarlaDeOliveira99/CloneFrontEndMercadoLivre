class Cavalo extends Peca {

    mostrarCaminho(div) {
        div.setAttribute('caminho', 'peca')
        div.style.backgroundColor = "MediumAquamarine"
        let [linha, coluna] = div.getAttribute('id').split('')
        linha = parseInt(linha)
        coluna = parseInt(coluna)
        let factory = new FactoryPeca()
        let coluna_aux = 0
        let linha_aux = 0

        //camiho a Direita 

        if (coluna + 2 <= 7) {
            let linha_aux = linha + 1
            for (let i = 0; i <= 1; i++) {
                if (linha_aux <= 7 && linha_aux >= 0) {
                    let elementoValidar = document.getElementById(linha_aux + '' + (coluna + 2))
                    let peca = factory.create(elementoValidar.innerText)
                    if (peca) {
                        if (peca.cor != this.cor) {
                            elementoValidar.style.backgroundColor = 'lightcoral'
                            elementoValidar.setAttribute('caminho', 'inimigo')
                        }
                    } else {
                        elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }

                }
                linha_aux = linha - 1
            }
        }
        // caminho para esquerda
        if (coluna - 2 >= 0) {
            let linha_aux = linha + 1
            for (let i = 0; i <= 1; i++) {
                if (linha_aux <= 7 && linha_aux >= 0) {
                    let elementoValidar = document.getElementById(linha_aux + '' + (coluna - 2))
                    let peca = factory.create(elementoValidar.innerText)
                    if (peca) {
                        if (peca.cor != this.cor) {
                            elementoValidar.style.backgroundColor = 'lightcoral'
                            elementoValidar.setAttribute('caminho', 'inimigo')
                        }
                    } else {
                        elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }
                }
                linha_aux = linha - 1
            }
        }

        // caminho para cima
        if (linha - 2 >= 0) {
            let coluna_aux = coluna + 1
            for (let i = 0; i <= 1; i++) {
                if (coluna_aux <= 7 && coluna_aux >= 0) {
                    let elementoValidar = document.getElementById((linha - 2) + '' + coluna_aux)
                    let peca = factory.create(elementoValidar.innerText)
                    if (peca) {
                        if (peca.cor != this.cor) {
                            elementoValidar.style.backgroundColor = 'lightcoral'
                            elementoValidar.setAttribute('caminho', 'inimigo')
                        }
                    } else {
                        elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }
                }
                coluna_aux = coluna - 1
            }
        }

        // caminho para Baixo
        if (linha + 2 <= 7) {
            let coluna_aux = coluna + 1
            for (let i = 0; i <= 1; i++) {
                if (coluna_aux <= 7 && coluna_aux >= 0) {
                    let elementoValidar = document.getElementById((linha + 2) + '' + coluna_aux)
                    let peca = factory.create(elementoValidar.innerText)
                    if (peca) {
                        if (peca.cor != this.cor) {
                            elementoValidar.style.backgroundColor = 'lightcoral'
                            elementoValidar.setAttribute('caminho', 'inimigo')
                        }
                    } else {
                        elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }

                }
                coluna_aux = coluna - 1
            }
        }
    }
} 