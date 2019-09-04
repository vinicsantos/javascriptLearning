function calculaEx4() {
    var vet = []
    var outString = ''

    for (var i = 0; i < 15; i++) {
        var input = window.prompt("Entre um número(Para finalizar digite \"s\"):")

        if (isNaN(input)) {
            break;
        }

        vet.push(input)

        if (vet[i] == 30) {
            if (outString.length > 0) {
                outString += ', '
            }
            outString += `${vet[i].toString()}(${i})`
        }
    }

    alert(`Elementos iguais a 30:\n${outString}`)

}