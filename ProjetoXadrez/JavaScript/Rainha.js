class Rainha extends Peca {

    mostrarCaminho(div) {
        div.setAttribute('caminho', 'peca')
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
                    elementoValidar.setAttribute('caminho', 'selecionado')
                    break;
                }
            }
            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho', 'selecionado')

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
                    elementoValidar.setAttribute('caminho', 'selecionado')
                    break;
                }
            }
            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho', 'selecionado')

        }


        // caminho para Frente
        for (let linha_aux = linha + 1; linha_aux <= 7; linha_aux++) {
            let elementoValidar = document.getElementById(linha_aux + '' + coluna)
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

        }
        // caminho para tras
        for (let linha_aux = linha - 1; linha_aux >= 0; linha_aux--) {
            let elementoValidar = document.getElementById(linha_aux + '' + coluna)
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
        }

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