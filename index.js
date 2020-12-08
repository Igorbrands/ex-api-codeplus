import api from './api.js';

//Função que lista produtos e total no html:
function listProducts({ item }) {
  const $productsList = document.querySelector('.product-list');
  const $productsTotal = document.querySelector('.product-total');

  item.forEach(({ name, image, bestPriceFormated, quantity }) => {
    const products = document.createElement('li');
    products.innerHTML = `
        <img src="${image}" />
        <p>${name}</p>
        <p>Qtd.: ${quantity}</p>
        <p>${bestPriceFormated}</p>
    `;

    $productsList.appendChild(products);
  });

  const totalCart = item.reduce(
    (acc, { bestPrice, quantity }) => (acc + (bestPrice * quantity)/100),
    0
  );

  const formatedTotal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(totalCart)


  $productsTotal.innerHTML = `
    Total do pedido: <span>${formatedTotal}</span>
  `;
}

//parâmetros da requisação AJAX:
const config = {
  method: 'GET',
  url: './products.json',
  type: null,
};

api(config, listProducts);

//Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"
