this.id = 0
var paginaAtual = 1
let btnProximo = document.getElementById('CampProximaEDireita')
let btnAnterior = document.getElementById('CampProximaEsquerda')

window.addEventListener('load', function carregarCards() {
    btnAnterior.style.display = 'none'
    paginas(paginaAtual)
})

btnProximo.addEventListener('click', function proximo() {
    let card = document.querySelectorAll(".cards")
    card.forEach(element => {
        element.remove()
    });
    paginaAtual += 1

    if (paginaAtual < 43) {
        if (paginaAtual == 42) {
            btnAnterior.style.display = 'flex'
            btnProximo.style.display = 'none'
        } else {
            btnAnterior.style.display = 'flex'
            btnProximo.style.display = 'flex'
        }
        paginas(paginaAtual)
    } else {
        btnProximo.style.display = 'none'
    }
})

btnAnterior.addEventListener('click', function proximo() {
    let card = document.querySelectorAll(".cards")
    card.forEach(element => {
        element.remove()
    });
    paginaAtual -= 1

    if (paginaAtual > 0) {
        if (paginaAtual == 1) {
            btnAnterior.style.display = 'none'
            btnProximo.style.display = 'flex'
        } else {
            btnAnterior.style.display = 'flex'
            btnProximo.style.display = 'flex'
        }
        paginas(paginaAtual)
    } else {
        btnAnterior.style.display = 'none'
    }
})


function paginas(paginaAtual) {
    let url = `https://rickandmortyapi.com/api/character/?page=${paginaAtual}`
    dadosPersonagem(url)
}


function dadosPersonagem(url) {
    fetch(url)
        .then(Response => Response.json())
        .then((json) => {
            json.results.forEach((element) => {
                this.id = element.id
                criarCampos()

                document.getElementById(`nomeDoAvatar${this.id}`).innerHTML = element.name
                document.getElementById(`especieDoAvatar${this.id}`).innerHTML = element.species + " - "
                document.getElementById(`statoDoAvatar${this.id}`).innerHTML = element.status
                document.getElementById(`localDoAvatar${this.id}`).innerHTML = element.location.name
                document.getElementById(`imagemAvatar${this.id}`).src = element.image
                
                episodioPersonagem(element.episode, this.id)
            });
        })
}

function episodioPersonagem(episode, id) {
    let url = episode[0]



    if (url != '') {
             fetch(url)
            .then(response => response.json())
            .then((json) => {
                console.log();
                document.getElementById(`episodioDoAvatar${id}`).innerHTML = json.name
            })
            .catch(error => console.error(error));
    } else {
        return '-'
    }
}

function criarCampos() {
    let divAreaDosCards = document.getElementById('areaCards')
    // cards
    let divCards = document.createElement('div')
    divCards.classList.add('cards')
    divCards.setAttribute('id', `${this.id}`)
    // imagem no cards
    let imgAvatar = document.createElement('img')
    imgAvatar.setAttribute('id', `imagemAvatar${this.id}`)
    imgAvatar.classList.add(`imgAvatar`)
    // dados dentro do cards
    let dados = document.createElement('div')
    dados.classList.add('dados')
    // p do nome 
    let nome = document.createElement('p')
    nome.classList.add('nome')
    nome.setAttribute('id', `nomeDoAvatar${this.id}`)
    // div do genero
    let genero = document.createElement('div')
    genero.classList.add('generoTxt')
    genero.setAttribute('id', `genero${this.id}`)
    // especie
    let especie = document.createElement('div')
    especie.classList.add('especie')
    especie.setAttribute('id', `especieDoAvatar${this.id}`)
    // status
    let status = document.createElement('div')
    status.classList.add('especie')
    status.setAttribute('id', `statoDoAvatar${this.id}`)
    // p do local 
    let local = document.createElement('p')
    local.classList.add('ultimoLocalTxt')
    local.setAttribute('id', `ultimoLocal${this.id}`)
    local.innerHTML = 'Last known location:'
    // p do localDoAvatar
    let localDoAvatar = document.createElement('p')
    localDoAvatar.classList.add('local')
    localDoAvatar.setAttribute('id', `localDoAvatar${this.id}`)
    // p do visto 
    let visto = document.createElement('p')
    visto.classList.add('vistoTxt')
    visto.setAttribute('id', `visto${this.id}`)
    visto.innerHTML = 'First seen in:'
    // p do episodio
    let episodio = document.createElement('p')
    episodio.classList.add('episodio')
    episodio.setAttribute('id', `episodioDoAvatar${this.id}`)


    divAreaDosCards.appendChild(divCards)
    divCards.appendChild(imgAvatar)
    divCards.appendChild(dados)
    dados.appendChild(nome)
    dados.appendChild(genero)
    genero.appendChild(especie)
    genero.appendChild(status)
    dados.appendChild(local)
    dados.appendChild(localDoAvatar)
    dados.appendChild(visto)
    dados.appendChild(episodio)
}







