/*7 - Criar uma div redonda e fazer ela se mover horizontalmente e verticalmente pela tela (semelhante ao ícone do DVD)*/


var circulo = document.getElementById('circulo')
var contadorhorizontal = 0
var contadorVertical = 0
var direita  = true
var cima = true



window.onload = function () {
    setInterval(horizontal, 200)
   // setInterval(vertical, 200)

}



function horizontal() {

    if (contadorhorizontal >= 93) { 
        direita = false
    }

    if (contadorhorizontal <= 0) {
        direita = true
    }

    circulo.style.left = contadorhorizontal + '%'
    if (direita == true ) {
        contadorhorizontal += 1
    } else{
        contadorhorizontal -= 1
    }
     
   
}

function vertical() {

    if (contadorVertical >= 87) { 
        cima = false
    }

    if (contadorVertical <= 0) {
        cima = true
    }

    circulo.style.top = contadorVertical + '%'
    if (cima == true ) {
        contadorVertical += 3
    } else{
        contadorVertical -= 3
    }
     
   
}









