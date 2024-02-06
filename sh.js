// script.js
const cart = document.getElementById('cart');
const productsContainer = document.getElementById('products-container');
let cartItems = 0;

cart.addEventListener('click', () => {
  alert(`Cart contains ${cartItems} items.`);
});

fetch('get_products.php')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.setAttribute('data-id', product.id);

      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      `;

      const addToCartButton = productDiv.querySelector('.add-to-cart');

      addToCartButton.addEventListener('click', () => {
        cartItems++;
        cart.textContent = `Cart (${cartItems})`;
        alert(`Product ${product.id} added to cart.`);
      });

      productsContainer.appendChild(productDiv);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
