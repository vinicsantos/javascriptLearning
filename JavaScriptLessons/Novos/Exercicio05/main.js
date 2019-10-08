function ex05() {
    var mensal = new Array();
    var totalMes = new Array();
    var somaNota = 0;
    for (var x = 0; x < 12; x++) {
        mensal[x] = [];
        for (var y = 0; y < 4; y++) {
            mensal[x][y] = Number(prompt(`coloque o valor da semnana`));
        }
    }
    var somaNotaMes = 0;
    var total = 0
    for (var x = 0; x < 12; x++) {
        totalMes[x] = 0
        for (var y = 0; y < 4; y++) {
            totalMes[x] +=  mensal[x][y];  
            total += mensal[x][y];
        }
    }
    var msg = ""
    for (var x = 0; x < totalMes.length; x++) {
        switch (x){
            case 0 :
                msg += `Mes: Janeiro \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
               break;    
               case 1 :
                    msg += `Mes: Fevereiro \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 2 :
                        msg += `Mes: Março \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 3 :
                        msg += `Mes: Abril \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 4 :
                        msg += `Mes: Maio \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 5 :
                        msg += `Mes: Junho \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 6 :
                        msg += `Mes: Julho \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 7 :
                        msg += `Mes: agosto \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 8 :
                        msg += `Mes: Setembro \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 9 :
                        msg += `Mes: Outubro \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 10 :
                        msg += `Mes: Novembro \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;
                case 11 :
                        msg += `Mes: Dezembro \nTotal do Mes: ${totalMes[x]} \n 1ª semana: ${mensal[x][0]} \n 2ª semana: ${mensal[x][1]} \n 3ª semana: ${mensal[x][2]} \n 4ª semana: ${mensal[x][3]}\n`;
                break;

        }

    }

    alert(`Relatorio Anual \nTotal do Ano: ${total} \n${msg}`);
}
