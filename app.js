// Define as variaveis que seram usadas
let soma = 0;
let preco_No_Carrinho = 1400;
let nome_Do_Produto = "";
let preco_Do_Produto = "";

function somaQuantidades(valor_Produto, quantidade) { // Identifica o produto selecionado e realiza a soma, alem de definir o nome e valor do produto nas variaveis
    if(valor_Produto == "Fone de ouvido - R$100") {
        nome_Do_Produto = "Fone de ouvido";
        preco_Do_Produto = "100";
        soma = soma + (100 * quantidade);
    } else if(valor_Produto == "Celular - R$1400") {
        nome_Do_Produto = "Celular";
        preco_Do_Produto = "1400";
        soma = soma + (1400 * quantidade);
    } else if(valor_Produto == "Oculus VR - R$5000") {
        nome_Do_Produto = "Oculus VR";
        preco_Do_Produto = "5000";
        soma = soma + (5000 * quantidade);
    };
    return soma, nome_Do_Produto;
}

function realiza_Soma() {
    preco_No_Carrinho += soma;
    soma = 0;
    return soma, preco_No_Carrinho;
}

function adicionar() {
    // Recebe a opção escolhida pelo usuário
    let produto = document.getElementById("produto");
    let valor_Produto = produto.options[produto.selectedIndex].value;

    // Recebe a quantidade digitado pelo usuário
    let quantidade = document.getElementById("quantidade").value;

    // Valida entrada
    if (quantidade == "" || quantidade <= 0) {
        alert("Erro! Digite uma quantidade valida.");
    } else {
        somaQuantidades(valor_Produto, quantidade);
    
        realiza_Soma();

        document.getElementById("valor-total").innerHTML = `R$ ${preco_No_Carrinho}`;
        adiciona_Texto_Carrinho(quantidade, preco_Do_Produto, nome_Do_Produto);
    }
}

function adiciona_Texto_Carrinho(quantidade, preco_Do_Produto, nome_Do_Produto) { // Adiciona o texto no carrinho
    // Define qual select vai ser utilizado
    let seletor = document.getElementById("lista-produtos");

    // Define o texto a ser exibido
    let texto_Do_Carrinho = `
    <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nome_Do_Produto} <span class="texto-azul">R$${preco_Do_Produto}</span>
        </section>
    `;

    // Adiciona a lista de produtos
    let novo_Produto = document.createElement("produto_Adicionado");
    novo_Produto.innerHTML += texto_Do_Carrinho;
    seletor.appendChild(novo_Produto);
}

function limpar() { // Zera os total e elimina os textos dos produtos no carrinho
    preco_No_Carrinho = 0;
    document.getElementById("valor-total").innerHTML = "0";
    document.getElementById("lista-produtos").innerHTML = "";
}


