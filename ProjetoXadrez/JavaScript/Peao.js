class Peao extends Peca {

    mostrarCaminho(div) {
        div.setAttribute('caminho', 'selecionado')
        let [linha, coluna] = div.getAttribute('id').split('')
        linha = parseInt(linha)
        coluna = parseInt(coluna)
        let factory = new FactoryPeca()
        let qtdCasas = linha + 1
        let qtdCasaInicail = linha + 2

        if (this.cor == 2) {
            var i = 1
        } else {
            var i = -2
        }

        if (div.id >= 10 && div.id <= 17 && this.cor == 2 || div.id >= 60 && div.id <= 67 && this.cor == 1) {
            // caminho 2 casas a frente
            for (let linha_aux = linha + 1; linha_aux <= qtdCasaInicail; linha_aux++) {
                if (this.cor == 2) {
                    var linha_Status = linha_aux
                } else {
                    var linha_Status = linha_aux - 2
                    linha = linha_Status - 2
                    qtdCasaInicail = linha + 1
                }
                let elementoValidar = document.getElementById(linha_Status + '' + coluna)
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
                let elementoValidar = document.getElementById((linha + i) + '' + casaDigonal1)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }
                }
            }

            if (casaDigonal2 > 0) {
                let elementoValidar = document.getElementById((linha + i) + '' + casaDigonal2)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }
                }
            }
        } else {
            for (let linha_aux = linha + 1; linha_aux <= qtdCasas; linha_aux++) {
                if (this.cor == 2) {
                    var linha_Status = linha_aux
                } else {
                    var linha_Status = linha_aux - 2
                    linha = linha_Status - 2
                    qtdCasaInicail = linha + 1
                }
                let elementoValidar = document.getElementById(linha_Status + '' + coluna)
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
                let elementoValidar = document.getElementById((linha + i) + '' + casaDigonal1)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }
                }
            }

            if (casaDigonal2 > 0) {
                let elementoValidar = document.getElementById((linha + i) + '' + casaDigonal2)
                let peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor != this.cor) {
                        elementoValidar.style.backgroundColor = "lightcoral"
                        elementoValidar.setAttribute('caminho', 'selecionado')
                    }
                }
            }
        }
    }
}