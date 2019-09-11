function calcula4() {
    try {
        var raio = Number(prompt("Entre com o raio da esfera: "));
        alert(`volume é de: ${calculaEsfera(raio)}`);
    } catch (error) {
        console.log(error);
    }
}

function calculaEsfera(raio) {
    try {
        return (4/3 * (raio));
    } catch (error) {
        console.log(error);
    }
}