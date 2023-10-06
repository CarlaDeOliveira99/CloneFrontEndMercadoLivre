class Produto {

    id;
    descricao;
    quantidade;
    precoInicial;
    precoFinal;
    arrayProduto;


    constructor() {
        this.id = 1
        this.descricao = ''
        this.quantidade = 0
        this.unidade = ''
        this.precoInicial = 0
        this.precoFinal = 0
        this.arrayProduto = [];

    }

    coletarDados() {
        let produto = {}

        if (this.arrayProduto.length == 0) {
            this.id = 1
        } else {
            this.id++
        }

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
            msg += 'Informe o Preço de Compra do produto\n'
        }
        if (produto.precoFinal == '') {
            msg += 'Informe o preço de venda do produto\n'
        }

        if (msg != '') {

            alert(msg)
            modal.classList.toggle("hide");
            fundoModal.classList.toggle("hide");
            return false
        }
        return true
    }

    adicionar(produto) {
        this.arrayProduto.push(produto);
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

            let imgEditar = document.createElement('img')
            imgEditar.src = 'icone/editar.png'
            imgEditar.classList.add('imgPadrao')
            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'icone/lixeira.png'
            imgExcluir.classList.add('imgPadrao')

            tdacoes.appendChild(imgEditar)
            tdacoes.appendChild(imgExcluir)



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

                let linhaSelecionadainformacoes = ''

                let armazenaCampoDeExcluir = imgExcluir.parentElement.parentElement.childNodes

                tdID = armazenaCampoDeExcluir[0].innerHTML
                tdProduto = armazenaCampoDeExcluir[1].innerHTML
                tdQuantidade = armazenaCampoDeExcluir[2].innerHTML
                tdUnidade = armazenaCampoDeExcluir[3].innerHTML
                tdPrecoIni = armazenaCampoDeExcluir[4].innerHTML
                tdPrecoFin = armazenaCampoDeExcluir[5].innerHTML

                linhaSelecionadainformacoes = `<p>Código: ${tdID}</p><p>Produto: ${tdProduto}</p> <p>Quantidade: ${tdQuantidade}</p> <p> Total de unidade: ${tdUnidade}</p><p>Preço de Compra: ${tdPrecoIni}</p><p>Preço de venda: ${tdPrecoFin}</p>`
                let areaDoTexto = document.getElementById('textoDoExcluir')

                areaDoTexto.innerHTML = linhaSelecionadainformacoes

                excluirModal.classList.toggle("esconder");
                fundoModalExcluir.classList.toggle("esconder");

                document.getElementById('campoID').value = tdID
            })
        }
    }

    alterarCampo(produto) {
        this.arrayProduto.forEach(jsonProduto => {

            if (jsonProduto.id == produto.tdId) {
                jsonProduto.descricao = produto.tdProduto
                jsonProduto.quantidade = produto.tdQuantidade
                jsonProduto.unidade = produto.tdUnidade
                jsonProduto.precoInicial = produto.tdPrecoIni
                jsonProduto.precoFinal = produto.tdPrecoFin
            }
            if (this.validarCampo(jsonProduto) == true) {
                this.atualizarTabela()
            }
        })
    }

    excluirCampo(produto) {

        let indiceExcluir = '';

        this.arrayProduto.forEach(jsonProduto => {
            if (jsonProduto.id == produto.tdId) {
                indiceExcluir = this.arrayProduto.findIndex(jsonProduto => jsonProduto.id == produto.tdId);
            }
        })
        this.arrayProduto.splice(indiceExcluir, 1)
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

    pesquisar() {
        let campoPesquisaDigitado = document.getElementById('campoPesquisa')
        let tr = document.getElementsByClassName('trInfor')
        Array.from(tr).forEach(element => {
            let inforLista = element.textContent.toLocaleLowerCase().trim()
            let txtCampoPesquisa = campoPesquisaDigitado.value.toLocaleLowerCase().trim()

            if (inforLista.includes(txtCampoPesquisa)) {
                let td = element.childNodes

                for (let index = 0; index < td.length; index++) {

                    if (td[index].textContent.includes(txtCampoPesquisa)) {
                        let celula = td[index]
                        let texto = celula.textContent.split(' ')

                        for (let i = 0; i < texto.length; i++) {
                            for (let j = 0; j < txtCampoPesquisa.length; j++) {
                                let element = txtCampoPesquisa[j]
                                if (texto[i].includes(element)) {
                                    texto[i] = `<span>${texto[i]}</span>`
                                }
                            }
                        }
                        let textoCompleto = texto.join(" ")
                        celula = textoCompleto
                        td[index].innerHTML = celula
                    }
                }
            } else {
                element.remove()
            }
        })
        campoPesquisaDigitado.addEventListener('input', () => {
            this.atualizarTabela()
        })
        if (campoPesquisaDigitado.value.trim() == '') {
            return this.atualizarTabela()
        }
    }



    ordenarTabela(categoria, iconeSelecionado) {
        let tr = document.getElementsByClassName('trInfor')
        let listaProduto = []

        Array.from(tr).forEach(element => {
            let td = element.childNodes

            let produto = {}
            produto.id = td[0].innerText
            produto.descricao = td[1].innerText
            produto.quantidade = td[2].innerText
            produto.unidade = td[3].innerText
            produto.precoInicial = td[4].innerText
            produto.precoFinal = td[5].innerText

            listaProduto.push(produto)
        })

        switch (iconeSelecionado) {
            case 1:
                if (categoria == "Cód") {
                    listaProduto.sort(function (a, b) {
                        if (a.id < b.id) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Produto") {
                    listaProduto.sort(function (a, b) {
                        if (a.descricao < b.descricao) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Quantidade") {
                    listaProduto.sort(function (a, b) {
                        if (a.quantidade < b.quantidade) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Unidade") {
                    listaProduto.sort(function (a, b) {
                        if (a.unidade < b.unidade) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Preço de Compra") {
                    listaProduto.sort(function (a, b) {
                        if (a.precoInicial < b.precoInicial) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Preço de Venda") {
                    listaProduto.sort(function (a, b) {
                        if (a.precoFinal < b.precoFinal) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                }

            case 2:
                if (categoria == "Cód") {
                    listaProduto.sort(function (a, b) {
                        if (a.id > b.id) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Produto") {
                    listaProduto.sort(function (a, b) {
                        if (a.descricao > b.descricao) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Quantidade") {
                    listaProduto.sort(function (a, b) {
                        if (a.quantidade > b.quantidade) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Unidade") {
                    listaProduto.sort(function (a, b) {
                        if (a.unidade > b.unidade) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Preço de Compra") {
                    listaProduto.sort(function (a, b) {
                        if (a.precoInicial > b.precoInicial) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                } else if (categoria == "Preço de Venda") {
                    listaProduto.sort(function (a, b) {
                        if (a.precoFinal > b.precoFinal) {
                            return -1;
                        } else {
                            return true;
                        }
                    });
                    this.arrayProduto = listaProduto
                    this.atualizarTabela()
                    break;
                }
            case 3:
                listaProduto.sort(function (a, b) {
                    if (a.id < b.id) {
                        return -1;
                    } else {
                        return true;
                    }
                });
                this.arrayProduto = listaProduto
                this.atualizarTabela()
                break;
            default:
                break;
        }
    }

}
