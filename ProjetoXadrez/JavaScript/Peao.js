class Peao extends Peca {

    mostrarCaminho(div) {
        div.setAttribute('caminho', 'peca')
        div.style.backgroundColor = "MediumAquamarine"
        let [linha, coluna] = div.getAttribute('id').split('')
        linha = parseInt(linha)
        coluna = parseInt(coluna)
        let factory = new FactoryPeca()

        if (this.cor == 2) {

            if (div.id >= 10 && div.id <= 17 && this.cor == 2) {
                var qtdCasas = linha + 2
            } else {
                var qtdCasas = linha + 1
            }
            for (let linha_aux = linha + 1; linha_aux <= qtdCasas; linha_aux++) {
                let elementoValidar = document.getElementById(linha_aux + '' + coluna)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    break;
                }
                elementoValidar.style.backgroundColor = "DarkSeaGreen"
                elementoValidar.setAttribute('caminho', 'selecionado')
            }
            let casaDigonal1 = coluna + 1
            let casaDigonal2 = coluna - 1
            if (casaDigonal1 <= 7) {
                let elementoValidar = document.getElementById((linha + 1) + '' + casaDigonal1)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'inimigo')
                    }
                }
            }
            if (casaDigonal2 >= 0) {
                let elementoValidar = document.getElementById((linha + 1) + '' + casaDigonal2)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'inimigo')
                    }
                }
            }
        } else {

            if (div.id >= 60 && div.id <= 67 && this.cor == 1) {
                var qtdCasas = linha - 2
            } else {
                var qtdCasas = linha - 1
            }
            for (let linha_aux = linha - 1; linha_aux >= qtdCasas; linha_aux--) {
                let elementoValidar = document.getElementById(linha_aux + '' + coluna)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    break;
                }
                elementoValidar.style.backgroundColor = "DarkSeaGreen"
                elementoValidar.setAttribute('caminho', 'selecionado')
            }
            let casaDigonal1 = coluna + 1
            let casaDigonal2 = coluna - 1
            if (casaDigonal1 <= 7) {
                let elementoValidar = document.getElementById((linha - 1) + '' + casaDigonal1)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'inimigo')
                    }
                }
            }
            if (casaDigonal2 >= 0) {
                let elementoValidar = document.getElementById((linha - 1) + '' + casaDigonal2)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'inimigo')
                    }
                }
            }
        }
    }
}