function root() {

    var matriz = new Array();

    for (var X = 0; X <= 5; X++) {
        matriz[X] = [];
        for (var Y = 0; Y <= 5; Y++) {
            if (y == 0){

                matriz[X][Y] = prompt(`Coloque o nome do aluno`)

            }
            matriz[X][Y] = Number(prompt(`Coloque o numero ${X}${Y}`));

        }

    }
    var auxmaior = matriz[0][0];
    var auxmenor = matriz[0][0];
    var posicaoMenor, posicaoMaior;
    
    for (var X = 0; X <= 6; X++) {

        for (var Y = 0; Y <= 3; Y++) {

            if (matriz[X][Y] >= auxmaior)  {

                auxmaior = matriz[X][Y];

                posicaoMaior = `${X},${Y}`;

            }
            if (matriz[X][Y] <= auxmenor) {

                auxmenor = matriz[X][Y];
                
                posicaoMenor = `${X},${Y}`;

            }
        }

    }

    alert(`Maior elemento: ${auxmaior} \nposição: ${posicaoMaior}\nMenor elemento: ${auxmenor}\nposição: ${posicaoMenor}`);
}
