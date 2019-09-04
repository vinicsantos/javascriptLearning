function calulaEx1() {
    try {
        var dadosVendedor = {
            codSeller: 0,
            nameSeller: ""
        };
        function newSeller() {
            dadosVendedor = {
                codSeller: 0,
                nameSeller: ""
            };
        }
        var dadosVenda = {
            codSeller: 0,
            month: 0,
            codSale: 0,
            valueSale: 0,
        };
        function newSale() {
            dadosVenda = {
                codSeller: 0,
                month: 0,
                codSale: 0,
                valueSale: 0,
            };
        }
        var message = ("1- Cadastrar vendedor.\n2- Cadastrar venda.\n3- Consultar vendas de um funcionario em determinado mes"
            + "\n4- Consultar total das vendas de determinado vendedor\n5- Numero de vendedor que mais vendeu em um mes"
            + "\n6- Mostrar numero do mes com mais vendas\n7- Sair");
        var choice = 0;
        var venda = [];
        var vendedor = [];
        var lastIndex = 0;
        do {
            choice = Number(prompt(message));
            switch (choice) {
                case 1:
                    if (vendedor.length >= 4) {
                        alert("Vendedores ja esta cadastrados");
                    } else {
                        for (var i = 0; i < 4; i++) {
                            newSeller();
                            dadosVendedor.nameSeller = prompt("Código do Vendedor a ser cadastrado: " + (i + 1) + "\nEntre com o nome do vendor:");
                            dadosVendedor.codSeller = (i + 1);
                            vendedor.push(dadosVendedor);
                            alert("Vendedor: " + dadosVendedor.nameSeller + "\nCodigo do vendedor: " + dadosVendedor.codSeller);
                        }
                    }
                    break;
                case 2:
                    if (vendedor.length < 4) {
                        alert("É necessário cadastrar um vendedor antes de uma venda")
                        break;
                    } else {
                        var i = 0;
                        var found = false;
                        newSale();
                        dadosVenda.codSeller = Number(prompt("Código do Vendedor: "));
                        dadosVenda.codSale = (i + 1);
                        dadosVenda.month = Number(prompt("Mes da venda: "));
                        dadosVenda.valueSale = Number(prompt("Vendas do vendedor deste mes: "));
                        if (venda.length != 0) {
                            if (dadosVenda.codSale == venda[lastIndex].codSale && dadosVenda.codSeller == venda[lastIndex].codSeller) {
                                found = true;
                            }
                        }
                        if (found == true) {
                            alert("Este vendedor nao pode ter mais vendas neste mes!");
                        } else {
                            venda.push(dadosVenda);
                            lastIndex = venda.lastIndexOf() + 1;
                        }
                    }
                    break;
                case 3:
                    if (venda.length < 1) {
                        alert("É necessário cadastrar uma venda antes de checar uma");
                        break;
                    } else {
                        var found = false;
                        var index = 0;
                        var month = Number(prompt("Entre com o mes da venda: "));
                        var seller = Number(prompt("Entre com o ID do vendedor: "));
                        for(var i = 0; i < venda.length; i++){
                            if(venda[i].month == month && venda[i].codSeller == seller){
                                found = true;
                                index = i;
                            }
                        }
                        if(found == true){
                            alert("ID vendedor: " + seller + "\nID Venda: " + venda[index].codSale + "\nMes da venda: " + venda[index].month + "\nQuantidade: " + venda[index].valueSale)
                        }else{
                            alert("Nenhuma venda foi encontrada deste vendedor neste mes.")
                        }
                    }
                    break;
                case 7:
                    break;
                default:
                    alert("Valor inválido");
                    break;
            }
        } while (choice != 7);
    } catch (error) {
        console.log(error);
    }
}