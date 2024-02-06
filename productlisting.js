// ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('get_products.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <div className="product" key={product.id} data-id={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
