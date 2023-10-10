class Bispo extends Peca {
    mostrarCaminho(div) {
        div.setAttribute('caminho', 'peca')
        let [linha, coluna] = div.getAttribute('id').split('')
        linha = parseInt(linha)
        coluna = parseInt(coluna)
        let factory = new FactoryPeca()


        for (let i = 0; i <= 7; i++) {
            if (i == 0) {
                var linha_aux = linha
                var coluna_aux = coluna
            }
            if (coluna_aux + 1 <= 7) {
                let elementoValidar = document.getElementById((linha_aux + 1) + '' + (coluna_aux + 1))
                peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor == this.cor) {
                        break;
                    } else {
                        elementoValidar.style.backgroundColor = 'lightcoral'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                        break;
                    }
                }
                elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                elementoValidar.setAttribute('caminho', 'selecionado')
                linha_aux += 1
                coluna_aux += 1
            }
        }

        for (let i = 0; i <= 7; i++) {
            if (i == 0) {
                var linha_aux = linha
                var coluna_aux = coluna
            }
            if (coluna_aux - 1 >= 0) {
                let elementoValidar = document.getElementById((linha_aux - 1) + '' + (coluna_aux - 1))
                peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor == this.cor) {
                        break;
                    } else {
                        elementoValidar.style.backgroundColor = 'lightcoral'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                        break;
                    }
                }
                elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                elementoValidar.setAttribute('caminho', 'selecionado')
                linha_aux -= 1
                coluna_aux -= 1
            }
        }

        for (let i = 0; i <= 7; i++) {
            if (i == 0) {
                var linha_aux = linha
                var coluna_aux = coluna
            }
            if (coluna_aux - 1 >= 0) {
                let elementoValidar = document.getElementById((linha_aux + 1) + '' + (coluna_aux - 1))
                peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor == this.cor) {
                        break;
                    } else {
                        elementoValidar.style.backgroundColor = 'lightcoral'
                        elementoValidar.setAttribute('caminho', 'selecionado')
                        break;
                    }
                }
                elementoValidar.style.backgroundColor = 'DarkSeaGreen'
                elementoValidar.setAttribute('caminho', 'selecionado')
                linha_aux += 1
                coluna_aux -= 1
            }
        }

        for (let i = 0; i <= 7; i++) {
            if (i == 0) {
                var linha_aux = linha
                var coluna_aux = coluna
            }
            if (coluna_aux + 1 <= 7) {
                let elementoValidar = document.getElementById((linha_aux - 1) + '' + (coluna_aux + 1))
                peca = factory.create(elementoValidar.innerText)
                if (peca) {
                    if (peca.cor == this.cor) {
                        break;
                    } else {
                        elementoValidar.style.backgroundColor = 'lightcoral'
                        elementoValidar.setAttribute('caminho', 'selecionado')
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