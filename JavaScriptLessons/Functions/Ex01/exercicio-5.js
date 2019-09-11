function calcula5() {
    try {
        var numero = Number(prompt("Entre com um numero: "));
        alert(`O numero é ${calculaNum(numero)}`);
    } catch (error) {
        console.log(error);
    }
}

function calculaNum(numero) {
    try {
        if(numero >= 0){
            return "positivo";
        }else{
            return "negativo"; 
        }
    } catch (error) {
        console.log(error);
    }
}