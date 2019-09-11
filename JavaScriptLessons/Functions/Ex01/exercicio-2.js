function calcula2(){
    try {
        var horas = Number(prompt("Entre com a hora: "));
        var minutos = Number(prompt("Entre com o minuto: "));
        var segundos = Number(prompt("Entre com o segundo: "));
        var segundosFinais = getSegundos(horas, minutos, segundos);
        alert(`${horas}h ${minutos}m ${segundos}s, equivale a: ${segundosFinais} segundos`)
    } catch (error) {
        console.log(error);
    }
}

function getSegundos(horas, minutos, segundos){
    try {
        minutos = minutos + (horas * 60);
        segundos = segundos + (minutos * 60);
        return segundos
    } catch (error) {
        console.log(error);
    }
}