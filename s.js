// script.js
const cart = document.getElementById('cart');
const products = document.querySelectorAll('.product');
let cartItems = 0;

cart.addEventListener('click', () => {
  alert(`Cart contains ${cartItems} items.`);
});

products.forEach(product => {
  const addToCartButton = product.querySelector('.add-to-cart');
  const productId = product.getAttribute('data-id');

  addToCartButton.addEventListener('click', () => {
    cartItems++;
    cart.textContent = `Cart (${cartItems})`;
    alert(`Product ${productId} added to cart.`);
  });
});
