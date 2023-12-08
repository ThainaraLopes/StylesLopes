// ... (código existente) ...

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
  // Verifica se existe um carrinho na sessão
  let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

  // Adiciona o produto ao carrinho
  carrinho.push({ nome: nomeProduto, preco: precoProduto, imagem: imagemProduto });


  // Salva o carrinho na sessão
  sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// ... (código existente) ...
