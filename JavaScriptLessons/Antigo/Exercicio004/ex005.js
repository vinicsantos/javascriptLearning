function crescente(a,b) {
    if (a.codigo < b.codigo)
       return -1;
    if (a.codigo > b.codigo)
      return 1;
    return 0;
  }

function executa005(){
    try {
        var dadosProduto = {
            codigo: 0,
            desc: "",
            valorUn: 0,
            qtdeEstoque: 0
        };
        /* var produto = [
            {codigo: 10, desc: "a"},
            {codigo: 3, desc: "a"},
            {codigo: 5, desc: "a"},
            {codigo: 1, desc: "a"}
        ]; */
        var produto = []

        for(var i = 0; i < 3; i++){
            dadosProduto.codigo = Number(prompt("Codigo do produto: "));
            dadosProduto.desc = prompt("Descrição do produto: ");
            dadosProduto.valorUn = Number(prompt("Valor unitário do produto: "));
            dadosProduto.qtdeEstoque = Number(prompt("Quantidade de produto em estoque: "));
            produto.push(dadosProduto);
        } 
        produto.sort(crescente);
        console.log(produto);

    } catch (error) {
        console.log(error);
    }
}