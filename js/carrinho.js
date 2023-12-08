  
// Função para exibir produtos no carrinho
function exibirCarrinho() {
    // Obtém o carrinho da sessão
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('lista-carrinho');
    let totalCarrinho = document.getElementById('total-carrinho');
  
    // Limpa a lista antes de adicionar os produtos
    listaCarrinho.innerHTML = '';
  
    // Adiciona os produtos ao carrinho
    carrinho.forEach(produto => {
      let li = document.createElement('li');
  
      // Adiciona a imagem do produto
      let img = document.createElement('img');
      img.src = produto.imagem;
      img.alt = produto.nome;
      img.style.width = '50px'; // Defina a largura desejada para a imagem
      li.appendChild(img);
  
      // Adiciona o nome e preço do produto
      li.innerHTML += ` ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
      
      listaCarrinho.appendChild(li);
    });
  
    // Calcula o total do carrinho
    let total = carrinho.reduce((acumulador, produto) => acumulador + produto.preco, 0);
  
    // Exibe o total na página
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
  }
  
  // Função para limpar o carrinho
  function limparCarrinho() {
    // Limpa o carrinho na sessão
    sessionStorage.removeItem('carrinho');
    // Atualiza a exibição do carrinho
    exibirCarrinho();
  }
  
  // Exibe o carrinho assim que a página é carregada
  exibirCarrinho();
  

