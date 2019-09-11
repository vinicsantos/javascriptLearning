function calcula1(){
    try {
        var numero = Number(prompt("Entre com o valor numero: "));
        var resultado = calculaNumero(numero);
        alert("O resultado da soma entre 1 e " + numero + " é equivalente a: " + resultado);
    } catch (error) {
        console.log(error);
    }
}

function calculaNumero(n){
    try {
        var numero = 0;
        for(var i = 1; i < n; i++){
            numero = numero + n;
        }
        return numero;
    } catch (error) {
        console.log(error);
    }
}