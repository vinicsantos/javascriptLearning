function root() {
    var nota = new Array();
    var nome = new Array();
    var somaNota = 0;
    for (var X = 0; X <= 15; X++) {
        nota[X] = [];
        for (var Y = 0; Y <= 5; Y++) {
            nota[X][Y] =Number(prompt(`Coloque a nota de ${nome[X]}`));
            somaNota += nota[X][Y];
        }
    }
    media = Math.floor(somaNota / nome.length);
    somaNotaAluno = 0;
    var auxSituacao = Array();
    var situacao;
    for (var X = 0; X <= 15; X++) {
        for (var Y = 0; Y <= 5; Y++) {
            somaNotaAluno += nota[X][Y];
            var medialuno = somaNotaAluno / 5;
            if (medialuno > media) {
                situacao = "Aprovado";
            } else {
                situacao = "Reprovado";
            }
        }
        var informacao = {};
        informacao.media = medialuno;
        informacao.situacao = situacao;
        auxSituacao[X] = informacao;
    }
    var msg = ""
    for (var X = 0; X < auxSituacao.length; X++) {
        msg += `Nome: ${nome[X]} \nMedia: ${auxSituacao[X].media} \nSituação: ${auxSituacao[X].situacao}`;
    }
    alert(`Media da sala: ${media}\n${msg}`);
}
