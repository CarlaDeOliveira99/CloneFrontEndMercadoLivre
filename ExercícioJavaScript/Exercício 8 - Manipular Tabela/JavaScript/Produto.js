class Produto {

    id;
    descricao;
    quantidade;
    precoInicial;
    procoFinal;
    arrayProduto;

    constructor() {
        this.id = 0
        this.descricao = ''
        this.quantidade = 0
        this.unidade = ''
        this.precoIncial = 0
        this.precoFinal = 0
        this.arraayProduto = [];
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
        this.arraayProduto.push(produto);
        this.id++

    }




    inserirTabela() {
        let estruturaTabela = document.getElementById('tbody')


        for (let index = 0; index < this.arraayProduto.length; index++) {
            let tr = estruturaTabela.insertRow()

            let tdID = tr.insertCell()
            let tdProduto = tr.insertCell()
            let tdQuantidade = tr.insertCell()
            let tdUnidade = tr.insertCell()
            let tdPrecoIni = tr.insertCell()
            let tdPrecoFin = tr.insertCell()
            let tdacoes = tr.insertCell()

            tr.classList.add('trInfor')

            tdID.innerHTML = this.arraayProduto[index].id;
            tdProduto.innerHTML = this.arraayProduto[index].descricao;
            tdQuantidade.innerHTML = this.arraayProduto[index].quantidade;
            tdUnidade.innerHTML = this.arraayProduto[index].unidade;
            tdPrecoIni.innerHTML = this.arraayProduto[index].precoInicial;
            tdPrecoFin.innerHTML = this.arraayProduto[index].precoFinal;

            tdID.classList.add('center')
            tdProduto.classList.add('tdInfo')
            tdQuantidade.classList.add('tdInfo')
            tdUnidade.classList.add('tdInfo')
            tdPrecoIni.classList.add('tdInfo')
            tdPrecoIni.classList.add('tdInfo')


            let imgEidt = document.createElement('img')
            imgEidt.src = 'icone/editar.png'
            imgEidt.classList.add('imgPadrao')
            let imgExclu = document.createElement('img')
            imgExclu.src = 'icone/lixeira.png'
            imgExclu.classList.add('imgPadrao')

            tdacoes.appendChild(imgExclu)
            tdacoes.appendChild(imgEidt)
        }
    }



    salvar() {
        let produto = this.coletarDados()


        if (this.validarCampo(produto) == true) {
            this.adicionar(produto)
            this.inserirTabela()
        }
    }


}


