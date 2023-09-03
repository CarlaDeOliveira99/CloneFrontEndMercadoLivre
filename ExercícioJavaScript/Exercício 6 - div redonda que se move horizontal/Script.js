/*Criar uma div redonda e fazer ela se mover horizontalmente pela tela*/
// 0 até 93

var circulo = document.getElementById('circulo')
var contador = 0
var direita  = true



window.onload = function () {
    setInterval(horizontal, 100)

}



function horizontal() {

    if (direita == true ) {
        circulo.style.left = contador + '%'
        contador += 2
    } else{
        circulo.style.left = contador + '%'
        contador -= 2
    }
     
    if (contador >= 93) { 
        direita = false
    }

    if (contador <= 0) {
        direita = true
    }
   
}









