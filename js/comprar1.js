
    // // Função para adicionar produtos ao carrinho
    // function adicionarProduto(nomeProduto) {
    //     // Crie um elemento de lista para representar o produto
    //     var novoItem = document.createElement("li");
    //     novoItem.textContent = nomeProduto;

    //     // Adicione o novo item à lista de produtos
    //     document.getElementById("listaProdutos").appendChild(novoItem);
    // }

    // // Exemplo de chamada para adicionar um produto (pode ser chamado ao clicar no botão de adicionar)
    // adicionarProduto("Produto de Exemplo");

// Função para adicionar produtos ao carrinho
function adicionarProduto(nomeProduto, precoProduto) {
    // Crie um objeto que representa o produto
    var produto = {
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: [0]// Pode ser ajustado conforme necessário
    };

    // Crie um elemento de lista para representar o produto
    var novoItem = document.createElement("li");

    // Adicione informações do produto ao elemento de lista
    novoItem.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`;

    // Adicione o novo item à lista de produtos
    document.getElementById("listaProdutos").appendChild(novoItem);
}

// Exemplo de chamada para adicionar um produto (pode ser chamado ao clicar no botão de adicionar)
adicionarProduto("Produto de Exemplo"+ nomeProduto);
s