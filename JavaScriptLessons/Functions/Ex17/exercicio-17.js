function calcula17() {
    try {
        var numeros = recebeNum()
        alert(`Numeros inseridos e negativos alterados para 0: ${retornaResultado(numeros)}`);
    } catch (error) {
        console.log(error);
    }
}

function recebeNum() {
    try {
        var numeros = []
        for(var i = 0; i < 5; i++){
            numeros.push(Number(prompt("Entre com um numero: ")));
        }
        return numeros;
    } catch (error) {
        console.log(error);
    }
}

function alteraNegativos(numeros){
    try {
        for(var i = 0; i < numeros.length; i++){
            if(numeros[i] < 0){
                numeros[i] = 0;
            }
        }
        return numeros;
    } catch (error) {
        console.log(error)
    }
}

function retornaResultado(numeros){
    try {
        var resultado = "";
        numerosP = alteraNegativos(numeros);
        for(var i = 0; i < numerosP.length; i++){
            resultado = resultado + `${numerosP[i]}, `;
        }
        resultado = resultado.substring(0, (resultado.length - 2))
        return resultado
    } catch (error) {
       console.log(error); 
    }
}