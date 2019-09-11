function calcula3(){
    try {
        var palavra1 = prompt("Entre com a palavra 1: ");
        var palavra2 = prompt("Entre com a palavra 2: ");
        alert(verificaPalavras(palavra1, palavra2));
    } catch (error) {
        console.log(error);
    }
}

function verificaPalavras(palavra1, palavra2){
    try {
        var p1 = String(palavra1);
        var p2 = String(palavra2);
        var indice = p1.length > p2.length ? p1.length : p2.length;
        for(var i = 0; i < indice; i++){
            if(palavra1[i] != palavra2[i]){
                return `Houve uma diferença de caracteres na ${i+1}º letra!`;
            }
        }
        return "Não houve nenhuma diferença entre as palavras";
    } catch (error) {
        console.log(error);
    }
}