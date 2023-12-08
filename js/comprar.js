
  // Armazenar itens no carrinho
  let carrinho = [];

  // Função para adicionar item ao carrinho
  function adicionarAoCarrinho(event) {
    event.preventDefault();

    const nome = event.target.getAttribute("data-nome");
    const preco = parseFloat(event.target.getAttribute("data-preco"));

    const item = { nome, preco };

    carrinho.push(item);

    // Atualizar a exibição do carrinho
    exibirCarrinho();
  }

  // Função para exibir itens no carrinho
  function exibirCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");

    // Limpar a lista antes de atualizar
    listaCarrinho.innerHTML = "";

    // Adicionar itens à lista
    carrinho.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
      listaCarrinho.appendChild(li);
    });
  }

  // Adicionar eventos de clique aos botões "Adicionar"
  const botoesAdicionar = document.querySelectorAll(".btn");
  botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", adicionarAoCarrinho);
  });

