class FactoryPeca {

    fromText(textPeca) {
        let idxPeca = PECAS_TXT.indexOf(textPeca)

        if (idxPeca == -1) { //não achou a peça 
            return false
        }

        return PECAS_TXT_DADOS[idxPeca]
    }


    create(pecaTxt) {
        let dadosPeca = this.fromText(pecaTxt)

        if (!dadosPeca) {
            return null
        }
        let pecaRetornar = null

        switch(dadosPeca.tipo) {
            case TIPO_PECA.Torre:
                pecaRetornar = new Torre(dadosPeca.cor)
                break
            
            case TIPO_PECA.Cavalo:
                pecaRetornar = new Cavalo(dadosPeca.cor)
                break
            
            case TIPO_PECA.Bispo:
                pecaRetornar = new Bispo(dadosPeca.cor)
                break
            
            case TIPO_PECA.Rainha:
                pecaRetornar = new Rainha(dadosPeca.cor)
                break
            
            case TIPO_PECA.Rei:
                pecaRetornar = new Rei(dadosPeca.cor)
                break
            
            case TIPO_PECA.Peao:
                pecaRetornar = new Peao(dadosPeca.cor)
                break
                
        }
        return pecaRetornar

    }

}
