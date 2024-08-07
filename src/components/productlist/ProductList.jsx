import React, { useState, useEffect } from "react";
import { getProducts } from "../../api";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";
import { FaCheckCircle } from "react-icons/fa";
// import { IoIosWarning } from "react-icons/io";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState("");
  // const [icon, setIcon] = useState();

  const { addToCart } = useShoppingCart();
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to your cart!`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

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
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
              <button
                className="button-style"
                onClick={() => handleAddToCart(product)}
              >
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {notification && (
        <div className="notification success">
          <FaCheckCircle className="checkMark" /> <p>{notification}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
