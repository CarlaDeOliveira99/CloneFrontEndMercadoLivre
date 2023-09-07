class Produto {

    constructor(){
        this.cod = 0;
        this.arrayProduto = [];

//     this.nomeProduto = '';
//     this.precoCompra = 0;
//     this.precoVenda = 0;
}



lerDados(){
    let produto = {}
    produto.cod = this.cod;
    document.getElementById('txtProduto').value
    document.getElementById('txtQuantidade').value
    document.getElementById('txtUnidade').value
    document.getElementById('txtPrecoIni').value
    document.getElementById('txtPrecoFinal').value

    return produto

}

salvar(){
    let produto = this.lerDados()
    console.log(produto);
}

adicionar(){

}

remover(){

}

    

}


