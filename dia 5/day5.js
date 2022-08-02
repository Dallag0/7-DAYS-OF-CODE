let produto = document.querySelector('#produto');
let ul = document.querySelector('ul');
let btn = document.querySelector('.btnList');

btn.addEventListener('click', addProduto);

function addProduto() {
  var item = '<li>' + produto.value + '<li>';
  ul.innerHTML += item;
  produto.value = '';
  produto.focus();
};
