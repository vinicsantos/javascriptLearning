var dadosPessoas = {
    salario: 0,
    qtdeFilhos: 0,
}

var pessoa = []

function newPessoa(){
    dadosPessoas = {
        salario: 0,
        qtdeFilhos: 0,
    }
    var pessoa = []
}

var resultado = {
    mediaSalarial: 0,
    mediaFilhos: 0,
    maiorSalario: 0,
    percentual: 0
}

function calcula20() {
    try {
        var mds = true;
        while(mds){
            newPessoa();
            dadosPessoas.salario = Number(prompt("Insira \"-1\" para sair!\nEntre com o seu salário: "))
            if(dadosPessoas.salario == -1){
                mds = false;
                break;
            }else{
                dadosPessoas.qtdeFilhos = Number(prompt("Entre com a qtde de filhos"));
                while(!checaPositivo(dadosPessoas.qtdeFilhos)){
                    dadosPessoas.qtdeFilhos = Number(prompt("A qtde de filhos deve ser Positiva!\nEntre com a qtde de filhos"));
                }
                pessoa.push(dadosPessoas);
            }
        }
        if(pessoa.length != null){
            resultado.mediaSalarial = calculaMediaSalarial(pessoa);
            resultado.maiorSalario = obtemMaiorSalario(pessoa);
            resultado.mediaFilhos = calculaMediaFilhos(pessoa);
            resultado.percentual = calculaPercentual(pessoa)
        }
        alert(`
            Média Salarial: ${resultado.mediaSalarial}\n
            Média de numero de filhos: ${resultado.mediaFilhos}\n
            Maior salário: ${resultado.maiorSalario}\n
            Percentual de pessoa com salário ate 350: ${resultado.percentual}%`)
    } catch (error) {
        console.log(error);
    }
}

function checaPositivo(numero){
    try {
        if(numero >= 0){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error);
    }
}

function calculaMediaSalarial(pessoa){
    try {
        var media = 0;
        for(var i = 0; i < pessoa.length; i++){
            media += pessoa[i].salario
        }
        return (media / pessoa.length);
    } catch (error) {
        console.log(error);
    }
}

function obtemMaiorSalario(pessoa){
    try {
        var maiorSalario = 0;
        for(var i = 0; i < pessoa.length; i++){
            if(pessoa[i].salario > maiorSalario){
                maiorSalario = pessoa[i].salario
            }
        }
        return maiorSalario;
    } catch (error) {
        console.log(error);
    }
}

function calculaMediaFilhos(pessoa){
    try {
        var media = 0;
        for(var i = 0; i < pessoa.length; i++){
            media += pessoa[i].qtdeFilhos;
        }
        return (media / pessoa.length);
    } catch (error) {
        console.log(error);
    }
}

function calculaPercentual(pessoa){
    try {
        var percentual = 0;
        var qtde = 0;
        for(var i = 0; i < pessoa.length; i++){
            if(pessoa[i].salario <= 350){
                qtde++;
            }
        }
        percentual = (qtde/100) * pessoa.length;
        return percentual;
    } catch (error) {
        console.log(error);
    }
}