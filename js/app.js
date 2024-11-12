let totalGeral;
limpar();

function adicionar(){
  let produto = document.getElementById('produto').value ;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = Number(document.getElementById('quantidade').value);
  let preco = valorUnitario*quantidade;
  if(isNaN(quantidade)||quantidade<=0||!Number.isInteger(quantidade)){
    alert('Erro na quantidade')
    document.getElementById('quantidade').value = '';
    return;
  }
  let carrinho = document.getElementById('lista-produtos')
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
        document.getElementById('quantidade').value = '';

  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.innerHTML = `R$ ${totalGeral}`;
}

function limpar(){
totalGeral = 0;
document.getElementById('valor-total').innerHTML = 'R$ 0';
document.getElementById('lista-produtos').innerHTML = '';
}