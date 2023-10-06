
class Torre extends Peca {


  constructor() {
    super()
    this.nome = "torre"
    this.totalDeMovimentos = 7
    this.movimentou = true
    this.armazenaIds = []
    this.idselecionado = 0
    this.img = ''
    this.pecas = {}

  }


  salvarIformacoes(idselecionado, pecas, img) {
    this.idselecionado = idselecionado
    this.img = img
    this.pecas = pecas

    this.movimentos()

    let armazenaIds = this.armazenaIds
    for (let i = 0; i < armazenaIds.length; i++) {
      document.getElementById(armazenaIds[i]).addEventListener('click', (event) => {
        let divSelecionada = event.target
        let id = divSelecionada.id
        let idselecionado =  this.idselecionado
        this.alterarPosicaoCor(id)
      })
    }
    return this.movimentou = false
  }

  // idselecionado, pecasBranca, img
  movimentos() {
    let idselecionado = this.idselecionado
    let pecas = this.pecas
    let idNumberDireita = parseInt(idselecionado)
    let idNumberEsquerda = parseInt(idselecionado)
    let idNumberFrente = parseInt(idselecionado)
    let idNumberTras = parseInt(idselecionado)
    let contadortras = 8
    let contadorFrente = 8
    let contadorDireita = 1
    let contadorEsquerda = 1
    let maxCasaDireita = 0
    let maxCasaEquerda = 0
    let minCasaEquerda = 0
    let armazenaIds = []
    armazenaIds.push(idselecionado)

    // saber quantas casas a direira
    if (idNumberDireita <= 8) {
      maxCasaDireita = 8
    } else if (idNumberDireita <= 16) {
      maxCasaDireita = 16
    } else if (idNumberDireita <= 24) {
      maxCasaDireita = 24
    } else if (idNumberDireita <= 32) {
      maxCasaDireita = 32
    } else if (idNumberDireita <= 40) {
      maxCasaDireita = 40
    } else if (idNumberDireita <= 48) {
      maxCasaDireita = 48
    } else if (idNumberDireita <= 56) {
      maxCasaDireita = 56
    } else if (idNumberDireita <= 64) {
      maxCasaDireita = 64
    }

    if (idNumberEsquerda <= 8) {
      maxCasaEquerda = 8
      minCasaEquerda = 1
    } else if (idNumberEsquerda <= 16) {
      maxCasaEquerda = 16
      minCasaEquerda = 9
    } else if (idNumberEsquerda <= 24) {
      maxCasaEquerda = 24
      minCasaEquerda = 17
    } else if (idNumberEsquerda <= 32) {
      maxCasaEquerda = 32
      minCasaEquerda = 25
    } else if (idNumberEsquerda <= 40) {
      maxCasaEquerda = 40
      minCasaEquerda = 33
    } else if (idNumberEsquerda <= 48) {
      maxCasaEquerda = 48
      minCasaEquerda = 41
    } else if (idNumberEsquerda <= 56) {
      maxCasaEquerda = 56
      minCasaEquerda = 49
    } else if (idNumberEsquerda <= 64) {
      maxCasaEquerda = 64
      minCasaEquerda = 57
    }

    for (let i = 0; i < this.totalDeMovimentos; i++) {
      let direita = document.getElementById(idNumberDireita + contadorDireita)
      let esquerda = document.getElementById(idNumberEsquerda - contadorEsquerda)
      let frente = document.getElementById(idNumberFrente + contadorFrente)
      let tras = document.getElementById(idNumberTras - contadortras)
      let celula = ''
     

      if (direita != null) {
        let celulaDireita = '0'
        if (idNumberDireita + contadorDireita <= maxCasaDireita) {
          celulaDireita = document.getElementById(idNumberDireita + contadorDireita).innerHTML
        } 
        if (celulaDireita == '') {
          document.getElementById(idNumberDireita + contadorDireita).style.backgroundColor = "DarkSeaGreen"
          let armaenaNum = idNumberDireita + contadorDireita
          idNumberDireita = armaenaNum
          armazenaIds.push(idNumberDireita)
        }
        if (celulaDireita == pecas.torreBranco || celulaDireita == pecas.cavaloBranco || celulaDireita == pecas.bispoBranco || celulaDireita == pecas.rainhaBranco || celulaDireita == pecas.reiBranco || celulaDireita == pecas.PeaoBranco) {
          document.getElementById(idNumberDireita + contadorDireita).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberDireita + contadorDireita
          armazenaIds.push(idAdversario)
        }
        if (celulaDireita == pecas.torrePreto || celulaDireita == pecas.cavaloPreto || celulaDireita == pecas.bispoPreto || celulaDireita == pecas.rainhaPreto || celulaDireita == pecas.reiPreto || celulaDireita == pecas.PeaoPreto) {
          document.getElementById(idNumberDireita + contadorDireita).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberDireita + contadorDireita
          armazenaIds.push(idAdversario)
        }
      }
      if (esquerda != null) {
        let celulaDireita = '0'
        if (idNumberEsquerda - contadorEsquerda <= maxCasaEquerda && idNumberEsquerda - contadorEsquerda >= minCasaEquerda) {
          celulaDireita = document.getElementById(idNumberEsquerda - contadorEsquerda).innerHTML
        } 
        if (celulaDireita == '') {
          document.getElementById(idNumberEsquerda - contadorEsquerda).style.backgroundColor = "DarkSeaGreen"
          let armaenaNum = idNumberEsquerda - contadorEsquerda
          idNumberEsquerda = armaenaNum
          armazenaIds.push(idNumberEsquerda)
        }
        if (celulaDireita == pecas.torreBranco || celulaDireita == pecas.cavaloBranco || celulaDireita == pecas.bispoBranco || celulaDireita == pecas.rainhaBranco || celulaDireita == pecas.reiBranco || celulaDireita == pecas.PeaoBranco) {
          document.getElementById(idNumberEsquerda - contadorEsquerda).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberEsquerda - contadorEsquerda
          armazenaIds.push(idAdversario)
        }
        if (celulaDireita == pecas.torrePreto || celulaDireita == pecas.cavaloPreto || celulaDireita == pecas.bispoPreto || celulaDireita == pecas.rainhaPreto || celulaDireita == pecas.reiPreto || celulaDireita == pecas.PeaoPreto) {
          document.getElementById(idNumberEsquerda - contadorEsquerda).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberEsquerda - contadorEsquerda
          armazenaIds.push(idAdversario)
        }
      }
      if (frente != null) {
        celula = document.getElementById(idNumberFrente + contadorFrente).innerHTML
        let casas = idNumberFrente + 7
        if (celula == '' && idNumberFrente <= casas) {
          document.getElementById(idNumberFrente + contadorFrente).style.backgroundColor = "DarkSeaGreen"
          let armaenaNum = idNumberFrente + contadorFrente
          idNumberFrente = armaenaNum
          armazenaIds.push(idNumberFrente)
        }
        if (celula == pecas.torreBranco || celula == pecas.cavaloBranco || celula == pecas.bispoBranco || celula == pecas.rainhaBranco || celula == pecas.reiBranco || celula == pecas.PeaoBranco) {
          document.getElementById(idNumberFrente + contadorFrente).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberFrente + contadorFrente
          armazenaIds.push(idAdversario)
        }
        if (celula == pecas.torrePreto || celula == pecas.cavaloPreto || celula == pecas.bispoPreto || celula == pecas.rainhaPreto || celula == pecas.reiPreto || celula == pecas.PeaoPreto) {
          document.getElementById(idNumberFrente + contadorFrente).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberFrente + contadorFrente
          armazenaIds.push(idAdversario)
        }
      }
      if (tras != null) {
        celula = document.getElementById(idNumberTras - contadortras).innerHTML
        let casas = idNumberTras - 7
        if (celula == '' && idNumberTras >= casas) {
          document.getElementById(idNumberTras - contadortras).style.backgroundColor = "DarkSeaGreen"
          let armaenaNum = idNumberTras - contadortras
          idNumberTras = armaenaNum
          armazenaIds.push(idNumberTras)
        }
        if (celula == pecas.torreBranco || celula == pecas.cavaloBranco || celula == pecas.bispoBranco || celula == pecas.rainhaBranco || celula == pecas.reiBranco || celula == pecas.PeaoBranco) {
          document.getElementById(idNumberTras - contadortras).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberTras - contadortras
          armazenaIds.push(idAdversario)
        }
        if (celula == pecas.torrePreto || celula == pecas.cavaloPreto || celula == pecas.bispoPreto || celula == pecas.rainhaPreto || celula == pecas.reiPreto || celula == pecas.PeaoPreto) {
          document.getElementById(idNumberTras - contadortras).style.backgroundColor = "lightcoral"
          let idAdversario = idNumberTras - contadortras
          armazenaIds.push(idAdversario)
        }
      }
      this.armazenaIds = armazenaIds
    }
  }



  // remover as cores e mudar posição da imagem
  alterarPosicaoCor(id) {
    let idselecionado = this.idselecionado
    let armazenaIds = this.armazenaIds

    for (let i = 0; i < armazenaIds.length; i++) {
      if (id == armazenaIds[i]) {
        document.getElementById(idselecionado).innerHTML = ''
        document.getElementById(id).innerHTML = this.img
      }

      let verificador = armazenaIds[i] % 2
      // começa com impar
      if (armazenaIds[i] < 9 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 9 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 17 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 17 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 25 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 25 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 33 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 33 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 41 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 41 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 49 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 49 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 57 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      } else if (armazenaIds[i] < 57 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 65 && verificador != 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "#999"
      } else if (armazenaIds[i] < 65 && verificador == 0) {
        document.getElementById(armazenaIds[i]).style.backgroundColor = "white"
      }
    }
  }
}

 // if (div.id >= 10 && div.id <= 17 && this.cor == 2 || div.id >= 60 && div.id <= 67 && this.cor == 1) {
            //     // caminho 2 casas a frente
            //     for (let linha_aux = linha + 1; linha_aux <= qtdCasaInicail; linha_aux++) {
            //         let elementoValidar = document.getElementById(linha_aux + '' + coluna)
            //         let peca = factory.create(elementoValidar.innerText)
            //         if (peca) {
            //             break;
            //         }
            //         elementoValidar.style.backgroundColor = "DarkSeaGreen"
            //         elementoValidar.setAttribute('caminho', 'selecionado')
            //     }

            //     let casaDigonal1 = coluna + 1
            //     let casaDigonal2 = coluna - 1
            //     if (casaDigonal1 > 7) {
            //         casaDigonal1 = 7
            //     } else if (casaDigonal2 < 0) {
            //         casaDigonal2 = 0
            //     }
            //     for (let coluna_aux = coluna + 1; coluna_aux == casaDigonal1; coluna_aux++) {
            //         let elementoValidar = document.getElementById((linha + 1) + '' + coluna_aux)
            //         let peca = factory.create(elementoValidar.innerText)
            //         if (peca) {
            //             if (peca.cor == this.cor) {
            //                 break;
            //             } else {
            //                 elementoValidar.style.backgroundColor = "lightcoral"
            //                 elementoValidar.setAttribute('caminho', 'selecionado')
            //                 break
            //             }
            //         }
            //     }
            //     for (let coluna_aux = coluna - 1; coluna_aux == casaDigonal2; coluna_aux--) {
            //         let elementoValidar = document.getElementById((linha + 1) + '' + coluna_aux)
            //         let peca = factory.create(elementoValidar.innerText)
            //         if (peca) {
            //             if (peca.cor == this.cor) {
            //                 break;
            //             } else {
            //                 elementoValidar.style.backgroundColor = "lightcoral"
            //                 elementoValidar.setAttribute('caminho', 'selecionado')
            //                 break
            //             }
            //         }
            //     }

            // } else {
            //     for (let linha_aux = linha + 1; linha_aux <= qtdCasas; linha_aux++) {
            //         let elementoValidar = document.getElementById(linha_aux + '' + coluna)
            //         let peca = factory.create(elementoValidar.innerText)
            //         if (peca) {

            //                 break;

            //         }

            //         elementoValidar.style.backgroundColor = "DarkSeaGreen"
            //         elementoValidar.setAttribute('caminho', 'selecionado')
            //     }
            //     let casaDigonal1 = coluna + 1
            //     let casaDigonal2 = coluna - 1
            //     if (casaDigonal1 > 7) {
            //         casaDigonal1 = 7
            //     } else if (casaDigonal2 < 0) {
            //         casaDigonal2 = 0
            //     }

            //     for (let coluna_aux = coluna + 1; coluna_aux == casaDigonal1; coluna_aux++) {
            //         let elementoValidar = document.getElementById((linha + 1) + '' + coluna_aux)
            //         let peca = factory.create(elementoValidar.innerText)
            //         if (peca) {
            //             if (peca.cor == this.cor) {
            //                 break;
            //             } else {
            //                 elementoValidar.style.backgroundColor = "lightcoral"
            //                 elementoValidar.setAttribute('caminho', 'selecionado')
            //                 break
            //             }
            //         }
            //     }

            //     for (let coluna_aux = coluna - 1; coluna_aux == casaDigonal2; coluna_aux--) {
            //         let elementoValidar = document.getElementById((linha + 1) + '' + coluna_aux)
            //         let peca = factory.create(elementoValidar.innerText)
            //         if (peca) {
            //             if (peca.cor == this.cor) {
            //                 break;
            //             } else {
            //                 elementoValidar.style.backgroundColor = "lightcoral"
            //                 elementoValidar.setAttribute('caminho', 'selecionado')
            //                 break
            //             }
            //         }
            //     }
            // }