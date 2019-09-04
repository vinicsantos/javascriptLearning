function executa003(){
    try {
        var dadosPessoa = {
            sexo: "",
            altura: 0,
            idade: 0,
            corOlhos: ""
        }
        var resultado = {
            mediaCastanhoUm: 0,
            maiorIdade: 0,
            mediaVerdeTres: 0,
            percentural: 0
        }
        for(var i = 0; i < 3; i++){
            dadosPessoa.sexo = prompt("Entre com o seu Sexo(\"F\" ou \"M\": ");
            dadosPessoa.altura = Number(prompt("Entre com sua altura: "));
            dadosPessoa.idade = Number(prompt("Entre com sua idade: "));
            dadosPessoa.corOlhos = prompt("Entre com a cor dos seus olhos: ")
            if(dadosPessoa.idade > resultado.maiorIdade){
                resultado.maiorIdade = dadosPessoa.idade;
            }
            if(dadosPessoa.corOlhos.toUpperCase == "C" && dadosPessoa.altura > 1,60){
                resultado.mediaCastanhoUm++;
            }
            if(dadosPessoa.sexo.toUpperCase == "F" && (dadosPessoa.idade > 20 && dadosPessoa.idade < 45) || (dadosPessoa.corOlhos.toUpperCase == "V" && dadosPessoa.altura > 1,70)){
                resultado.mediaVerdeTres++;
            }
        }
        resultado.mediaCastanhoUm = (resultado.mediaCastanhoUm / 3);
        alert("Média de pessoa com olhos castanhos e altura maior que 1,60m: " + resultado.mediaCastanhoUm 
            + "\nMaior idade entre os habitantes: " + resultado.maiorIdade 
            + "\nQuantidade de pessoa do sexo feminino com idade entre 20 e 45 e/ou com olhos verdes e altura maior que 1,70cm: " + resultado.mediaVerdeTres)
    } catch (error) {
        console.log(error);
    }
}