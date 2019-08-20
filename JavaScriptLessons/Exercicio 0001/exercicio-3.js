function calculaEx3() {
    let codigos = [];
    let estoque = [];
    for(var i = 0; i < 10; i++){
        codigos.push(Number(prompt("Informe o codigo do produto")));
        estoque.push(Number(prompt("Informe a qtde do produto")));
    }
    let cliente = Number(prompt("Informe o codigo do cliente"));
    while (cliente != 0){
        let codProduto = Number(prompt("Informe o codigo do produto"));
        let qtdeProduto = Number(prompt("Informe a qtde do produto"));
        if(codigos.indexOf(codProduto) == -1){
            alert("Nao foi possivel obter o codigo destge produto")
        }else{
            if(estoque[codigos.indexOf(codProduto)] - qtdeProduto >= 0){
                estoque[codigos.indexOf(codProduto)] -= qtdeProduto;
                alert("Produto comprado com sucesso");
                alert("Novo estoque do produto: " + estoque[codigos.indexOf(codProduto)]);
            }else{
                alert("Produto sem estoque o suficiente");
            }
        }
        cliente = Number(prompt("Informe um novo codigo do cliente\nPara finalizar o programa entre com \"0\""));
    }
    alert("Estoque atualizado: " + estoque);
}