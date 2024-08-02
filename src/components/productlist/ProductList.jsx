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
          <div key={product.id} className="product-box">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">{product.name}</h2>
              <br />
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
