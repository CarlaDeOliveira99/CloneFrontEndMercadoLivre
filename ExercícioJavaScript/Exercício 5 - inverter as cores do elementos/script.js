/*Usando JS, inverta as classes (itens com azul terão a classe vermelho e vermelho terão a classe azul).  */

// seleciona todo os elementos da classe
let corContrarioAzul = document.querySelectorAll('.azul')

let corContrarioVermelho = document.querySelectorAll('.vermelho')


// aItera todas as cores da classe
corContrarioAzul.forEach(function(corContrarioAzul) {
    corContrarioAzul.style.color = "red";
});

corContrarioVermelho.forEach(function(corContrarioVermelho) {
    corContrarioVermelho.style.color = "blue";
});