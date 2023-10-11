class Bispo extends Peca {
    mostrarCaminho(div) {
        div.setAttribute('caminho', 'peca')
        div.style.backgroundColor = "MediumAquamarine"
        let [linha, coluna] = div.getAttribute('id').split('')
        linha = parseInt(linha)
        coluna = parseInt(coluna)
        let factory = new FactoryPeca()

        if (linha - 1 >= 0 && coluna - 1 >= 0) {
            var linha_aux = linha
            var coluna_aux = coluna

            while (linha_aux - 1 >= 0 && coluna_aux - 1 >= 0) {
                let elementoValidar = document.getElementById((linha_aux - 1) + '' + (coluna_aux - 1))
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
                linha_aux -= 1
                coluna_aux -= 1
            }

        }

        if (linha + 1 <= 7 && coluna + 1 <= 7) {
            var linha_aux = linha
            var coluna_aux = coluna

            while (linha_aux + 1 <= 7 && coluna_aux + 1 <= 7) {
                let elementoValidar = document.getElementById((linha_aux + 1) + '' + (coluna_aux + 1))
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
                linha_aux += 1
                coluna_aux += 1
            }

        }

        if (linha + 1 <= 7 && coluna - 1 >= 0) {
            var linha_aux = linha
            var coluna_aux = coluna

            while (linha_aux + 1 <= 7 && coluna_aux - 1 >= 0) {
                let elementoValidar = document.getElementById((linha_aux + 1) + '' + (coluna_aux - 1))
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
                linha_aux += 1
                coluna_aux -= 1
            }

        }

        if (linha - 1 >= 0 && coluna + 1 <= 7) {
            var linha_aux = linha
            var coluna_aux = coluna

            while (linha_aux - 1 >= 0 && coluna_aux + 1 <= 7) {
                let elementoValidar = document.getElementById((linha_aux - 1) + '' + (coluna_aux + 1))
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
                linha_aux -= 1
                coluna_aux += 1
            }

        }

    }
}