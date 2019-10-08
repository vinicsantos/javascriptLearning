function calcula16() {
    try {
        var numeros = recebeNum()
        alert(`A soma dos numeros: ${calculaTudo(numeros)}`);
    } catch (error) {
        console.log(error);
    }
}

function recebeNum() {
    try {
        var numeros = []
        for(var i = 0; i < 20; i++){
            numeros.push(Number(prompt("Entre com um numero: ")));
        }
        return numeros;
    } catch (error) {
        console.log(error);
    }
}

function calculaTudo(numeros){
    try {
        var resultado = 0.
        for(var i = 0; i < numeros.length; i++){
            resultado = resultado + numeros[i];
        }
        return resultado;
    } catch (error) {
        console.log(error)
    }
}