function calcula15() {
    try {
        var numeros = recebeNum()
        alert(`Quantidade de numeros pares: ${calculaPares(numeros)}`);
    } catch (error) {
        console.log(error);
    }
}

function recebeNum() {
    try {
        var numeros = []
        for(var i = 0; i < 15; i++){
            numeros.push(Number(prompt("Entre com um numero: ")));
        }
        return numeros;
    } catch (error) {
        console.log(error);
    }
}

function calculaPares(numeros){
    try {
        var qtdePar = 0.
        for(var i = 0; i < numeros.length; i++){
            if((numeros[i] % 2) == 0){
                qtdePar++;
            }
        }
        return qtdePar;
    } catch (error) {
        console.log(error)
    }
}