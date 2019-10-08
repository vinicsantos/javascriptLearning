function ex02() {
    var matriz = new Array();
    for (var i = 0; i < 2; i++) {
        matriz[i] = [];
        for (var j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt(`Entre com o número:`));
        }
    }
    var somaP = 0, qtd = somaP, qtdElementos = somaP;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 4; j++) {
            if ((matriz[i][j] >= 12) && (matriz[i][j] <= 20)) {
                qtdElementos++;
            }
            if ((matriz[i][j] % 2) == 0) {
                somaP += matriz[i][j];
                qtd++;
            }
        }
    }
    var media = somaP / qtd;
    alert(`A quantidade de elementos entre 12 e 20: ${qtdElementos}\nA media de pares: ${media.toFixed(2)}`);
}
