function executa002(){
    try {
        var dadosPessoa = {
            idade: 0,
            salario: 0,
            qtdeFilhos: 0
        }
        var resultado = {
            mediaSalarial: 0,
            qtdeFilhos: 0,
            maiorSalario: 0,
            percentual: 0
        }
        var pessoa = [];
        for (var i = 0; i < 3; i++){
            dadosPessoa.salario = parseInt(prompt("Entre com o seu salario"));
            dadosPessoa.idade = parseInt(prompt("Entre com a sua idade"));
            dadosPessoa.qtdeFilhos = parseInt(prompt("Entre com a quantidade de filhos"));
            if(dadosPessoa.salario > resultado.maiorSalario){
                resultado.maiorSalario = dadosPessoa.salario;
            }
            if(dadosPessoa.salario > 1000){
                resultado.percentual++;
            }
            resultado.mediaSalarial += dadosPessoa.salario;
            resultado.qtdeFilhos += dadosPessoa.qtdeFilhos;
            pessoa.push(dadosPessoa);
        }
        resultado.mediaSalarial = (resultado.mediaSalarial / 3);
        resultado.qtdeFilhos = (resultado.qtdeFilhos / 3);
        alert("Media Salarial: " + resultado.mediaSalarial + "\nMedia de filhos: " + resultado.qtdeFilhos 
            + "\nMaior salario: " + resultado.maiorSalario);
    } catch (error) {
        console.log(error);
    }
}