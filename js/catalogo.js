

    // Função para adicionar produtos ao carrinho
    function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
      // Verifica se existe um carrinho na sessão
      let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

      // Verifica se o produto já está no carrinho
      let produtoExistente = carrinho.find(produto => produto.nome === nomeProduto);

      if (produtoExistente) {
        // Se o produto já existe, aumenta a quantidade
        produtoExistente.quantidade = (produtoExistente.quantidade || 1) + 1;
      } else {
        // Se o produto não existe, adiciona ao carrinho
        carrinho.push({ nome: nomeProduto, preco: precoProduto, imagem: imagemProduto, quantidade: 1 });

        // Adiciona o item ao carrinho visualmente
        adicionarItemVisualmente(nomeProduto, precoProduto, imagemProduto);
      }

      // Salva o carrinho na sessão
      sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Função para adicionar visualmente um item ao carrinho
    function adicionarItemVisualmente(nomeProduto, precoProduto, imagemProduto) {
      let listaCarrinho = document.getElementById('lista-carrinho');

      // Cria um novo item na lista visual do carrinho
      let li = document.createElement('li');
      li.className = 'd-flex justify-content-between align-items-center';

      // Adiciona a imagem do produto
      let img = document.createElement('img');
      img.src = imagemProduto;
      img.alt = nomeProduto;
      img.style.width = '50px'; // Defina a largura desejada para a imagem
      li.appendChild(img);

      // Adiciona o nome e preço do produto
      li.innerHTML += ` ${nomeProduto} - R$ ${precoProduto.toFixed(2)}`;

      // Adiciona o campo de quantidade
      let quantidadeInput = document.createElement('input');
      quantidadeInput.type = 'number';
      quantidadeInput.min = 1;
      quantidadeInput.value = 1; // Valor padrão 1 para um novo item
      quantidadeInput.addEventListener('change', function () {
        // Atualiza a quantidade no carrinho quando o valor do input é alterado
        // (não é necessário no momento para novos itens, mas pode ser útil no futuro)
      });
      li.appendChild(quantidadeInput);

      // Adiciona o botão de remoção
      let botaoRemover = document.createElement('button');
      botaoRemover.type = 'button';
      botaoRemover.className = 'btn btn-danger btn-sm';
      botaoRemover.innerText = 'Remover';
      botaoRemover.onclick = function () {
        // Chame uma função para remover o item do carrinho
        removerDoCarrinhoVisualmente(li);
      };
      li.appendChild(botaoRemover);

      // Adiciona o novo item à lista de carrinho
      listaCarrinho.appendChild(li);
    }

    // Função para remover visualmente um item do carrinho
    function removerDoCarrinhoVisualmente(item) {
      // Remove o item da lista visual do carrinho
      document.getElementById('lista-carrinho').removeChild(item);
    }
 

