/*</table>
colete do usuário duas datas (usando inputs de data) e altere a cor do “quadrado” dessa data no calendário dinamicamente. 
Por exemplo, se o usuário escolher a data 01/10/2022 – o quadrado da com o dia 1 (quarta-feira) deve mudar de cor.
colete do usuário duas datas (usando inputs de data), a seguir faça: 1) calcule quantos dias existem entre elas e 
exiba na tela (por exemplo, entre 05/04/2022 – 10/04/2022 → 5 dias); 2) mude a cor dos dias entre as datas
 selecionadas para a cor azul e as datas selecionadas para a cor laranja.
 */

var data1 = document.getElementById('data1')
var data2 = document.getElementById('data2')
var tabela = document.querySelectorAll('td')
var resposta = document.getElementById('diferencaDias')


function confimado() {
    primeiraData()
    segundaData()

    //verifica se selecionou uma data
    if (primeiraData() != null && segundaData() === null || primeiraData() === null && segundaData() != null) {
        if (primeiraData() != null || segundaData != null) {

            for (let index = 0; index < tabela.length; index++) {
                tabela[index].style.backgroundColor = "white"
                let valorTab = tabela[index].innerText;

                if (primeiraData() == valorTab || segundaData() == valorTab) {
                    tabela[index].style.backgroundColor = "cadetblue"
                }
            }
        }

    } else if (primeiraData() != null && segundaData() != null) {// verifica se selecionou duas datas
        var diferencaDeDias = 0
        for (let index = 0; index < tabela.length; index++) {
            tabela[index].style.backgroundColor = "white"
        }


        // calculo de diferença de dias e printa na tela
        if (primeiraData() < segundaData()) {
            diferencaDeDias = segundaData() - primeiraData()
            resposta.innerHTML = diferencaDeDias + ' dias de diferença'
            console.log(diferencaDeDias + ' dias de diferença');//console dias total
        } else {
            diferencaDeDias = primeiraData() - segundaData()
            resposta.innerHTML = diferencaDeDias + ' dias de diferença'
        }

        var armazenaIndeceInicial = 0
        var armazenaDifeDias = 0

        //verifica as datas selecionadas e troca de cor 
        for (let index = 0; index < tabela.length; index++) {
            let valorTab = tabela[index].innerText;

            if (primeiraData() == valorTab) {
                tabela[index].style.backgroundColor = "cadetblue"
            } else if (segundaData() == valorTab) {
                tabela[index].style.backgroundColor = "cadetblue"


                armazenaIndeceInicial = index
                armazenaDifeDias = armazenaIndeceInicial + diferencaDeDias


                //verifica o intervalo e muda de cor dentro dos intervalos
                if (primeiraData() < segundaData()) {
                    armazenaDifeDias = armazenaIndeceInicial - diferencaDeDias
                    for (let index = armazenaDifeDias + 1; index < armazenaIndeceInicial; index++) {
                        tabela[index].style.backgroundColor = "aquamarine"
                        tabela[index].style.fontWeight = "bold"

                    }
                } else {
                    for (let index = armazenaIndeceInicial + 1; index < armazenaDifeDias; index++) {
                        tabela[index].style.backgroundColor = "aquamarine"
                        tabela[index].style.fontWeight = "bold"
                    }
                }
            }
        }

    } else {
        window.alert("ATENÇÃO, precisa selecionar uma data")
    }
}



// validação dos dias selecionado

function primeiraData() {
    let diaTexto = data1.value

    let data = new Date(diaTexto)

    var dia1 = data.getDate()

    if (dia1 <= 29) {
        dia1 += 1
    } else if (dia1 == 31) {
        dia1 = 1
    }

    if (dia1 > 0 && dia1 < 32) {
        return dia1
    } else {
        dia1 = null
        return dia1
    }
}


function segundaData() {
    let diaTexto = data2.value

    let data = new Date(diaTexto)

    var dia2 = data.getDate()

    if (dia2 <= 29) {
        dia2 += 1
    } else if (dia2 == 31) {
        dia2 = 1
    }

    if (dia2 > 0 && dia2 < 32) {
        return dia2
    } else {
        dia2 = null
        return dia2
    }

}

