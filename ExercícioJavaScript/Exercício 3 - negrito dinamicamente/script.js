/*3 - Faça um programa que “pegue” uma lista <ol> no HTML e coloque negrito dinamicamente a partir de um nome digitado no seu input. Por exemplo
A sua tela possui uma lista de nomes:
João
Claudio
Marcio
Usando um input você digita “Jo”, então o programa no mesmo momento deverá devolver o seguinte resultado:
João (negrito)
Claudio
Marcio
 */


areaPesquisa.addEventListener("keyup", () => {
    let areaPesquisa = document.getElementById('areaPesquisa')
    let  lista = document.getElementsByTagName('ol')

    if (areaPesquisa.value.trim() == '') {
        return
    }

    Array.from(lista).forEach(element => {
        let valorLista = element.textContent.toLowerCase().trim()
        let valorDigitado = areaPesquisa.value.toLowerCase().trim()

        if (valorLista.includes(valorDigitado)) {
            element.style.fontWeight = "bold"
        }else{
            element.style.fontWeight = "normal"
        }
    })


   
});


