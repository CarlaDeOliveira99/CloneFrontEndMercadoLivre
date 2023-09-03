/*Criar uma div redonda e fazer ela se mover horizontalmente pela tela*/



function carregar() {

    let animacao = [
        { transform: "translateX(725px)" },
        { transform: "translateX(-725px)" },
        { transform: "translateX(725px)" },
    ]

    let tempo = {
        duration: 3000,
        iterations: Infinity,
    }

    document.getElementById('circulo').animate(animacao, tempo)
}









