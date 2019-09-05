function executa004(){
    try {
        var dadosPessoa = {
            idade: 0,
            sexo: "",
            rendaFamiliar: 0,
            numeroFilhos: 0
        }
        resultado = {
            mediaSalarial: 0,
            menorIdade: 1000,
            maiorIdade: 0,
            qtdePobre: 0
        }

        var pessoa = [];

        for(var i = 0; i < 3; i++){
            dadosPessoa.idade = Number(prompt("Entre com a idade: "));
            dadosPessoa.sexo = prompt("Entre com o seu sexo (\"F\" ou \"M\"): ");
            dadosPessoa.rendaFamiliar = Number(prompt("Entre com a renda familiar: "));
            dadosPessoa.numeroFilhos = Number(prompt("Entre com o numero de filhos: "));
            pessoa.push(dadosPessoa);
            resultado.mediaSalarial += dadosPessoa.rendaFamiliar;
            if(dadosPessoa.idade > resultado.maiorIdade){
                resultado.maiorIdade = dadosPessoa.idade;
            }
            if(dadosPessoa.idade < resultado.menorIdade){
                resultado.menorIdade = dadosPessoa.idade;
            }
            if(dadosPessoa.sexo.toLowerCase() == "f" && dadosPessoa.numeroFilhos > 2 && dadosPessoa.rendaFamiliar < 600){
                resultado.qtdePobre++;
            }
        }
        resultado.mediaSalarial = (resultado.mediaSalarial / 3);
        alert("Média salarial: " + resultado.mediaSalarial + "\nMenor idade: " + resultado.menorIdade + "\nMaior idade: " + resultado.maiorIdade 
            + "\nQuantidade de mulheres com mais de dois filhos e com renda familiar inferior a R$ 600,00: " + resultado.qtdePobre);

    } catch (error) {
        console.log(error);
    }
}