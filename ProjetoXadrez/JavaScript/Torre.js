class Torre extends Peca {
lightcoral

    mostrarCaminho(div) {
        div.setAttribute('caminho','selecionado')
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
                    elementoValidar.setAttribute('caminho','selecionado')
                    break
                }
            }

            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho','selecionado')

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
                    elementoValidar.setAttribute('caminho','selecionado')
                    break
                }
            }

            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho','selecionado')
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
                    elementoValidar.setAttribute('caminho','selecionado')
                    break
                }
            }

            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho','selecionado')
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
                    elementoValidar.setAttribute('caminho','selecionado')
                    break
                }
            }

            elementoValidar.style.backgroundColor = 'DarkSeaGreen'
            elementoValidar.setAttribute('caminho','selecionado')
        }
    }

    posicionar(diPosicaoAtual,divPosicaoAnterior,caminho){
       let torre =  document.getElementById(divPosicaoAnterior.id).textContent
       document.getElementById(diPosicaoAtual.id).textContent = torre
       document.getElementById(divPosicaoAnterior.id).textContent = ""
 
    }
}