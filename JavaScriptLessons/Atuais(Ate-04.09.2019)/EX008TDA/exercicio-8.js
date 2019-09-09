function calulaEx8(){
    try {
        var dadosEstado = {
            nomeEstado: 0,
            nmrVeiculos: 0,
            nmrAcidentes: 0,
            percentual: 0,
        }
        var estado = [];
        var final = "";
        function newEstado(){
            dadosEstado = {
                nomeEstado: 0,
                nmrVeiculos: 0,
                nmrAcidentes: 0,
                percentual: 0,
            }
            
        }
        var resultado = {
            maiorIndice: 0,
            menorIndice: 1000000,
            totalVeiculos: 0,
            mediaAcidentes: 0,
        }
        for (var i = 0; i < 3; i++){
            newEstado();
            dadosEstado.nomeEstado = prompt("Nome do estado: ");
            dadosEstado.nmrVeiculos = Number(prompt("Numero de veiculos que circulam nesse estado "));
            dadosEstado.nmrAcidentes = Number(prompt("Numero de acidentes: "));
            if(resultado.maiorIndice < dadosEstado.nmrAcidentes){
                resultado.maiorIndice = dadosEstado.nmrAcidentes;
            }
            if(resultado.menorIndice > dadosEstado.nmrAcidentes){
                resultado.menorIndice = dadosEstado.nmrAcidentes;
            }
            resultado.mediaAcidentes += dadosEstado.nmrAcidentes;
            resultado.totalVeiculos += dadosEstado.nmrVeiculos;
            estado.push(dadosEstado);
        }
        final = final + "Maior Indice de acidentes" + resultado.maiorIndice + "\nMenor Indice de acidentes" + resultado.menorIndice
            + "\nMédia de acidentes entre os estados: " + (resultado.mediaAcidentes / resultado.totalVeiculos)
            + "\nPercentual de veiculos em casa estado: \n"
        for(var i = 0; i < estado.length; i++){
            estado[i].percentual = (resultado.totalVeiculos / estado[i].nmrVeiculos);
            final = final + "Estado: " +  estado[i].nomeEstado + "\nPercentual: " + estado[i].percentual + "\n"
        }
        alert(final);
    } catch (error) {
        console.log(error);
    }
}