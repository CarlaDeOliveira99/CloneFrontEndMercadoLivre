class Produto {

    id;
    descricao;
    quantidade;
    precoInicial;
    procoFinal;
    arrayProduto;
    excluirStatus

    constructor() {
        this.id = 1
        this.descricao = ''
        this.quantidade = 0
        this.unidade = ''
        this.precoIncial = 0
        this.precoFinal = 0
        this.arrayProduto = [];
        this.excluirStatus = false
    }


    coletarDados() {
        let produto = {}

        produto.id = this.id;
        produto.descricao = document.getElementById('campoProd').value
        produto.quantidade = document.getElementById('quantidade').value
        produto.unidade = document.getElementById('unidade').value
        produto.precoInicial = document.getElementById('precoInicial').value
        produto.precoFinal = document.getElementById('precoFinal').value

        return produto
    }


    validarCampo(produto) {
        let msg = '';

        if (produto.descricao == '') {
            msg += 'Informe o nome do produto\n'
        }
        if (produto.quantidade == '') {
            msg += 'Informe a quantidade de produto\n'
        }
        if (produto.unidade == '') {
            msg += 'Informe a unidade do produto\n'
        }
        if (produto.precoInicial == '') {
            msg += 'Informe o preço de compra do produto\n'
        }
        if (produto.precoFinal == '') {
            msg += 'Informe o preço de venda do produto\n'
        }

        if (msg != '') {
            alert(msg)

            return false
        }
        return true
    }

    adicionar(produto) {
        this.arrayProduto.push(produto);
        this.id++

    }

    atualizarTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for (let i = 0; i < this.arrayProduto.length; i++) {
            let tr = tbody.insertRow()


            let tdID = tr.insertCell()
            let tdProduto = tr.insertCell()
            let tdQuantidade = tr.insertCell()
            let tdUnidade = tr.insertCell()
            let tdPrecoIni = tr.insertCell()
            let tdPrecoFin = tr.insertCell()
            let tdacoes = tr.insertCell()

            tr.classList.add('trInfor')


            tdID.innerHTML = this.arrayProduto[i].id;
            tdProduto.innerHTML = this.arrayProduto[i].descricao;
            tdQuantidade.innerHTML = this.arrayProduto[i].quantidade;
            tdUnidade.innerHTML = this.arrayProduto[i].unidade;
            tdPrecoIni.innerHTML = this.arrayProduto[i].precoInicial;
            tdPrecoFin.innerHTML = this.arrayProduto[i].precoFinal;


            tdID.classList.add('center')
            tdProduto.classList.add('tdInfo')
            tdQuantidade.classList.add('center')
            tdUnidade.classList.add('tdInfo')
            tdPrecoIni.classList.add('center')
            tdPrecoFin.classList.add('center')

            var imgEditar = document.createElement('img')
            imgEditar.src = 'icone/editar.png'
            imgEditar.classList.add('imgPadrao')
            var imgExcluir = document.createElement('img')
            imgExcluir.src = 'icone/lixeira.png'
            imgExcluir.classList.add('imgPadrao')

            tdacoes.appendChild(imgExcluir)
            tdacoes.appendChild(imgEditar)


            // alterar os dados da tabela
            imgEditar.addEventListener('click', (event) => {

                imgEditar = event.target

                let armazenaCampoAlterar = imgEditar.parentElement.parentElement.childNodes


                tdID = armazenaCampoAlterar[0].innerHTML
                tdProduto = armazenaCampoAlterar[1].innerHTML
                tdQuantidade = armazenaCampoAlterar[2].innerHTML
                tdUnidade = armazenaCampoAlterar[3].innerHTML
                tdPrecoIni = armazenaCampoAlterar[4].innerHTML
                tdPrecoFin = armazenaCampoAlterar[5].innerHTML


                modal.classList.toggle("hide");
                fundoModal.classList.toggle("hide");

                document.getElementById('campoID').value = tdID
                document.getElementById('campoProd').value = tdProduto
                document.getElementById('quantidade').value = tdQuantidade
                document.getElementById('unidade').value = tdUnidade
                document.getElementById('precoInicial').value = tdPrecoIni
                document.getElementById('precoFinal').value = tdPrecoFin

                document.getElementById('btnModalCadastrar').style.display = 'none'
                document.getElementById('alterar').style.display = 'inline'


            })

            // Excluir os dados
            imgExcluir.addEventListener('click', (event) => {

                imgExcluir = event.target

                let linhaSelecionada = ''

                let armazenaCampoDeExcluir = imgExcluir.parentElement.parentElement.childNodes

                tdID = armazenaCampoDeExcluir[0].innerHTML
                tdProduto = armazenaCampoDeExcluir[1].innerHTML
                tdQuantidade = armazenaCampoDeExcluir[2].innerHTML
                tdUnidade = armazenaCampoDeExcluir[3].innerHTML
                tdPrecoIni = armazenaCampoDeExcluir[4].innerHTML
                tdPrecoFin = armazenaCampoDeExcluir[5].innerHTML

                linhaSelecionada = `<p>Código: ${tdID}</p><p>Produto: ${tdProduto}</p> <p>Quantidade: ${tdQuantidade}</p> <p> Total de unidade: ${tdUnidade}</p><p>Preço de compra: ${tdPrecoIni}</p><p>Preço de venda: ${tdPrecoFin}</p>`
                let areaDoTexto = document.getElementById('textoDoExcluir')


                areaDoTexto.innerHTML = linhaSelecionada

                excluirModal.classList.toggle("esconder");
                fundoModalExcluir.classList.toggle("esconder");


                
                document.getElementById('campoID').value = tdID
                document.getElementById('campoProd').value = tdProduto
                document.getElementById('quantidade').value = tdQuantidade
                document.getElementById('unidade').value = tdUnidade
                document.getElementById('precoInicial').value = tdPrecoIni
                document.getElementById('precoFinal').value = tdPrecoFin


            })
        }
    }

    alterarCampo(produto) {
        this.arrayProduto.forEach(jsonProduto => {
            if (jsonProduto.id == produto.tdId) {
                jsonProduto.descricao = produto.tdProduto
                jsonProduto.quantidade = produto.tdQuantidade
                jsonProduto.unidade = produto.tdUnidade
                jsonProduto.precoIncial = produto.tdPrecoIni
                jsonProduto.precoFinal = produto.tdPrecoFin
            }
        })
        this.atualizarTabela()

    }


    excluirCampo(produto) {


        this.arrayProduto.forEach(produtoExcluir => {
            if (produtoExcluir.id == produto.tdId) {
                
           
        }
    })


    this.atualizarTabela()
    }



limparCampoCadastro() {
    document.getElementById('campoProd').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('unidade').value = ''
    document.getElementById('precoInicial').value = ''
    document.getElementById('precoFinal').value = ''
}


salvar() {
    let produto = this.coletarDados()

    if (this.validarCampo(produto) == true) {
        this.adicionar(produto)
    }
    this.atualizarTabela()

}
}


