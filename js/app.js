limpar();
const select = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade');


select.addEventListener('change', () => {
  const valorSelecionado = select.value;
  console.log(valorSelecionado); // LEMBRAR DE REMOVER DEPOIS
});

quantidade.addEventListener('change', () => {
  const quantidadeSolicitada = quantidade.value;
  console.log(quantidadeSolicitada); // LEMBRAR DE REMOVER DEPOIS
});

function adicionar() {
  const listaDeProdutos = document.querySelector('#lista-produtos');
  const qtde = parseInt(quantidade.value);
  const valorSelecionado = select.value; 

  if (qtde <= 0 || isNaN(qtde)) {
    alert("Informe uma quantidade válida!");
    return;
  }

  const nomeProduto = valorSelecionado.split(' - ')[0]; 
  const precoTexto = valorSelecionado.split('R$')[1];   
  const precoUnitario = parseFloat(precoTexto);        
  const total = precoUnitario * qtde; // total

 //Mensagem no carrinho 
  listaDeProdutos.innerHTML = `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${qtde}x</span> ${nomeProduto} 
      <span class="texto-azul">R$${total.toFixed(2)}</span>
    </section>
  `;
  // Variavel total
 const totalResultado = document.querySelector(".carrinho__total");
 totalResultado.innerHTML = `
   <p class="carrinho__total">
     Total: <span class="texto-azul" id="valor-total">R$${total.toFixed(2)}</span>
   </p>
 `;
}

function limpar() {
  document.getElementById('produto').selectedIndex = 0;
  document.getElementById('quantidade').value = '';
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0.00';
}



