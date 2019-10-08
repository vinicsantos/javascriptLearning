function calcula18() {
    try {
        var result = retornaResultado()
        alert(`Os 10 primeiros numeros primos maior que 100:\n${result}`);
    } catch (error) {
        console.log(error);
    }
}


function obtemPrimos() {
    try {
        var primos = [];
        var numero = 100
        while (primos.length < 10) {
            if(cechaPrimo(numero)){
                primos.push(numero)
            }
            numero++;
        }
        return primos;
    } catch (error) {
        console.log(error)
    }
}

function cechaPrimo(numero) {
    var inicio = 2;
    while (inicio <= Math.sqrt(numero)) if (numero % inicio++ < 1) return false;
    return numero > 1;
}

function retornaResultado() {
    try {
        var resultado = "";
        numerosP = obtemPrimos();
        for (var i = 0; i < numerosP.length; i++) {
            resultado = resultado + `${numerosP[i]}, `;
        }
        resultado = resultado.substring(0, (resultado.length - 2))
        return resultado
    } catch (error) {
        console.log(error);
    }
}