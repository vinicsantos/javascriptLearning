function calulaEx1() {
    var vet = []
    var pares = [], impares = []

    for (var i = 0; i < 6; i++) {
        var input = window.prompt("Entre com um número(Para finalizar digite \"s\"):")

        if (isNaN(input)) {
            break;
        }

        vet.push(input)

        if (vet[i] % 2 == 0) {
            pares.push(vet[i])
        } else {
            impares.push(vet[i])
        }
    }

    alert(`Números inseridos(${vet.length})\n${vet.join(', ')}`)
    alert(`Números pares(${pares.length})\n${pares.join(', ')}`)
    alert(`Números impares(${impares.length})\n${impares.join(', ')}`)
}
