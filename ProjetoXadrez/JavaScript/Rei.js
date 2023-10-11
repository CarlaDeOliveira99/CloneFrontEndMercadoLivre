class Rei extends Peca {

    mostrarCaminho(div) {
        div.setAttribute('caminho', 'peca')
        div.style.backgroundColor = "MediumAquamarine"
        let [linha, coluna] = div.getAttribute('id').split('')
        linha = parseInt(linha)
        coluna = parseInt(coluna)
        let factory = new FactoryPeca()

        // camiho a Direita
        for (let coluna_aux = coluna + 1; coluna_aux <= 7; coluna_aux++) {
            let elementoValidar = document.getElementById(linha + '' + coluna_aux)
            peca = factory.create(elementoValidar.innerText)
            if (peca) {
                if (peca.cor == this.cor) {
                    break;
                } else {
                    elementoValidar.style.backgroundColor = 'lightcoral'
                    elementoValidar.setAttribute('caminho', 'inimigo')
                    break;
                }
            }
            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho', 'selecionado')
            break;
        }

        // camiho a esquerda
        for (let coluna_aux = coluna - 1; coluna_aux >= 0; coluna_aux--) {
            let elementoValidar = document.getElementById(linha + '' + coluna_aux)
            peca = factory.create(elementoValidar.innerText)
            if (peca) {
                if (peca.cor == this.cor) {
                    break;
                } else {
                    elementoValidar.style.backgroundColor = 'lightcoral'
                    elementoValidar.setAttribute('caminho', 'inimigo')
                    break;
                }
            }
            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho', 'selecionado')
            break;
        }


        // caminho para Frente
        for (let linha_aux = linha + 1; linha_aux <= 7; linha_aux++) {
            let elementoValidar = document.getElementById(linha_aux + '' + coluna)
            peca = factory.create(elementoValidar.innerText)
            var linhaCima = linha_aux - 1
            if (peca) {
                if (peca.cor == this.cor) {
                    break;
                } else {
                    elementoValidar.style.backgroundColor = 'lightcoral'
                    elementoValidar.setAttribute('caminho', 'inimigo')
                    break
                }
            }
            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho', 'selecionado')
            break;
        }
        // caminho para tras
        for (let linha_aux = linha - 1; linha_aux >= 0; linha_aux--) {
            let elementoValidar = document.getElementById(linha_aux + '' + coluna)
            peca = factory.create(elementoValidar.innerText)
            var linhaBaixo = linha_aux
            if (peca) {
                if (peca.cor == this.cor) {
                    break;
                } else {
                    elementoValidar.style.backgroundColor = 'lightcoral'
                    elementoValidar.setAttribute('caminho', 'inimigo')
                    break
                }
            }
            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho', 'selecionado')
            break;
        }

        let casaDigonal1 = linhaBaixo
        let casaDigonal2 = linhaCima + 1
        let coluna_aux = + 1
        let linha_aux = casaDigonal1

        for (let i = 1; i <= 4; i++) {
            if (i == 3) {
                linha_aux = casaDigonal2
                coluna_aux = +1
            }
            if (coluna + coluna_aux <= 7 && coluna + coluna_aux >= 0) {
                let elementoValidar = document.getElementById(linha_aux + '' + (coluna + coluna_aux))
                peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'inimigo')
                    }
                } else {
                    elementoValidar.style.backgroundColor = "DarkSeaGreen"
                    elementoValidar.setAttribute('caminho', 'selecionado')
                }
            }
            coluna_aux = -1
        }
    }
}