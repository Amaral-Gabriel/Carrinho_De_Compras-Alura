let soma = 0;
let preco_No_Carrinho = 0;

function adicionar() {
    let produto = document.getElementById("produto");
    let valor_Produto = produto.options[produto.selectedIndex].value;

    let quantidade = document.getElementById("quantidade").value;
    if (quantidade == "" || quantidade <= 0) {
        alert("Erro! Digite uma quantidade valida.")
    } else {
        if(valor_Produto == "Fone de ouvido - R$100") {
            soma = soma + (100 * quantidade);
        } else if(valor_Produto == "Celular - R$1400") {
            soma = soma + (1400 * quantidade);;
        } else if(valor_Produto == "Oculus VR - R$5000") {
            soma = soma + (5000 * quantidade);;
        };
    }
    preco_No_Carrinho += soma;
    soma = 0;

    document.getElementById("valor-total").innerHTML = `R$ ${preco_No_Carrinho}`;
    
}



function limpar() {
    preco_No_Carrinho = 0;
    document.getElementById("valor-total").innerHTML = "0";
}
