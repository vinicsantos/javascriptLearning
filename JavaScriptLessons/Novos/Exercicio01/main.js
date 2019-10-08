function ex01() {
    var matriz = new Array();
    qtdElementos = 0;
    for (var i = 0; i < 3; i++) {
        matriz[i] =  [];
        for (var j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt(`Entre com o número:`))
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {
            if ((matriz[i][j] >= 15) && (matriz[i][j] <= 20)) {
                qtdElementos++;
            }
        }
    }
    alert(`A quantidade de elementos entre 15 e 20: ${qtdElementos}`);
}
