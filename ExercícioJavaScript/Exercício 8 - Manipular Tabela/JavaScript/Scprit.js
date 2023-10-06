
var classProduto = new Produto();

window.addEventListener('load', function () {

    this.document.getElementById('btnModalCadastrar').addEventListener('click', function () {
        classProduto.salvar();
    })

    this.document.getElementById('alterar').addEventListener('click', function () {
        let produto = {}
        produto.tdId = document.getElementById('campoID').value
        produto.tdProduto = document.getElementById('campoProd').value
        produto.tdQuantidade = document.getElementById('quantidade').value
        produto.tdUnidade = document.getElementById('unidade').value
        produto.tdPrecoIni = document.getElementById('precoInicial').value
        produto.tdPrecoFin = document.getElementById('precoFinal').value

        classProduto.alterarCampo(produto)

    })


    this.document.getElementById('sim').addEventListener('click', function () {
        let produto = {}
        produto.tdId = document.getElementById('campoID').value
        classProduto.excluirCampo(produto)
    })

    this.document.getElementById('btnAdicionar').addEventListener('click', function () {
        classProduto.limparCampoCadastro();
        document.getElementById('btnModalCadastrar').style.display = 'inline'
        document.getElementById('alterar').style.display = 'none'
    })


    this.document.getElementById('campoPesquisa').addEventListener('keyup', function () {
        classProduto.pesquisar()
    })

})

