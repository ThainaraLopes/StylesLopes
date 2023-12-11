$(document).ready(function() {
    // Oculta a seção ao carregar a página
    $('#carrinho1').hide();
  
    // Adiciona um evento de clique para mostrar a seção quando o botão for clicado
    $('#abrirCarrinho').click(function() {
      $('#carrinho1').show();
    });
  
    // Adiciona um evento de clique para ocultar a seção quando o botão de fechar for clicado
    $('#fecharCarrinho').click(function() {
      $('#carrinho1').hide();
    });
  });
  
