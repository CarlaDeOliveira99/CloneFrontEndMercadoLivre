class Peca {

    nome;
    totalDeMovimentos;
    vez;

    constructor() {
        this.nome = ""
        this.cor = ''
        this.totalDeMovimentos = 0
        this.vez = false
        this.contadorPartidas = 0
    }

    // dados(pecaClicada, idselecionado) {
    //     let pecaAmbasCor = [ "♖","♘","♗", "♕", "♔","♙","♜","♞","♝","♛","♚","♟",]
    //     this.contadorPartidas++
    //     for (let i = 0; i < pecaAmbasCor.length; i++) {
    //         if (pecaClicada == pecaAmbasCor[i]) {
    //             this.nome = pecaAmbasCor[i]
    //             if (i < 6) {
    //                 this.cor = "Branco"
    //                 this.vez = true
    //             }else{
    //                 this.cor = "Preto"
    //                 this.vez = true
    //             }
    //         }  
    //     }


    //     if (this.contadorPartidas == 1) {
            
    //     }
       


    // }


// pecasBrancas(){


//     if (pecaClicada == pecaAmbasCor.t  rrePreto) {
//                 let pecas = {}
//                 pecas.torreBranco = "♖"
//                 pecas.cavaloBranco = "♘"
//                 pecas.bispoBranco = "♗"
//                 pecas.rainhaBranco = "♕"
//                 pecas.reiBranco = "♔"
//                 pecas.PeaoBranco = "♙"
//                 var torre = new Torre()
//                 let img = "♜"
//                 torre.salvarIformacoes(idselecionado, pecas, img)
//             } 
// }

// }

    pecaSelecionada(pecaClicada,idselecionado) {
        let pecaAmbasCor = {}
        pecaAmbasCor.torreBranco = "♖"
        pecaAmbasCor.cavaloBranco = "♘"
        pecaAmbasCor.bispoBranco = "♗"
        pecaAmbasCor.rainhaBranco = "♕"
        pecaAmbasCor.reiBranco = "♔"
        pecaAmbasCor.PeaoBranco = "♙"
        pecaAmbasCor.torrePreto = "♜"
        pecaAmbasCor.cavaloPreto = "♞"
        pecaAmbasCor.bispoPreto = "♝"
        pecaAmbasCor.rainhaPreto = "♛"
        pecaAmbasCor.reiPreto = "♚"
        pecaAmbasCor.PeaoPreto = "♟"


        if (pecaClicada == pecaAmbasCor.torrePreto) {
            let pecas = {}
            pecas.torreBranco = "♖"
            pecas.cavaloBranco = "♘"
            pecas.bispoBranco = "♗"
            pecas.rainhaBranco = "♕"
            pecas.reiBranco = "♔"
            pecas.PeaoBranco = "♙"
            var torre = new Torre()
            let img = "♜"
            torre.salvarIformacoes(idselecionado, pecas, img)
        } else if (pecaClicada == pecaAmbasCor.torreBranco) {
            let pecas = {}
            pecas.torrePreto = "♜"
            pecas.cavaloPreto = "♞"
            pecas.bispoPreto = "♝"
            pecas.rainhaPreto = "♛"
            pecas.reiPreto = "♚"
            pecas.PeaoPreto = "♟"
            var torre = new Torre()
            let img = "♖"
            torre.salvarIformacoes(idselecionado, pecas, img)
        }

    }
}