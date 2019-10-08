function calcula19() {
    try {
        alert("Favor pressionte \"OK\" para inserir os valores do primeiro vetor")
        var vertoNumeros1 = recebeNum()
        alert("Favor pressionte \"OK\" para inserir os valores do segundo vetor")
        var vertoNumeros2 = recebeNum()
        alert(`Intersecção dos vetores: ${retornaResultado(vertoNumeros1, vertoNumeros2)}`);
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

function checaInterseccao(vertoNumeros1, vertoNumeros2){
    try {
        numeros = []
        for(var i = 0; i < vertoNumeros1.length; i++){
            for(var j = 0; j < vertoNumeros2.length; j++){
                if(vertoNumeros1[i] == vertoNumeros2[j]){
                    numeros.push(vertoNumeros1[i]);
                }
            }
        }
        return numeros;
    } catch (error) {
        console.log(error)
    }
}

function retornaResultado(vertoNumeros1, vertoNumeros2){
    try {
        var resultado = "";
        numerosP = checaInterseccao(vertoNumeros1, vertoNumeros2);
        for(var i = 0; i < numerosP.length; i++){
            resultado = resultado + `${numerosP[i]}, `;
        }
        resultado = resultado.substring(0, (resultado.length - 2))
        return resultado
    } catch (error) {
       console.log(error); 
    }
}