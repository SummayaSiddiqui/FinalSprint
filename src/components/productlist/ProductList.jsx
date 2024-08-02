import React, { useState, useEffect } from "react";
import { getProducts } from "../../api";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="product-container">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
