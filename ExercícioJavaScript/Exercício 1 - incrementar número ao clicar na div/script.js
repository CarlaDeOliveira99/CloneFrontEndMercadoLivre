/*1 - criar uma tela com uma div com número 1, ao clickar na div deve incrementar o numero */


// acessar a id da div
let numeroElemento = document.getElementById('numero')


// pegar o elemneto que está dentro da div
let numeroTexto = numeroElemento.textContent


let numeroInter = parseInt(numeroTexto)
let somarNumero = 1


document.getElementById('numero').addEventListener("click", function () {
    somarNumero += numeroInter
    document.getElementById('numero').innerText = somarNumero
})

