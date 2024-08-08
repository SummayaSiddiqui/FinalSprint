import React, { useState, useEffect } from "react";
import { getProducts } from "../../api";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState("");
  const [icon, setIcon] = useState();
  const [NotificationStyle, setNotificationStyle] = useState("");

  const { addToCart, cartItems } = useShoppingCart();
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleAddToCart = (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);

    if (itemExists) {
      setNotification(
        "Item Already exists, Please go to cart to adjust quantity!"
      );
      setIcon(<IoIosWarning className="warning-icon" />);
      setNotificationStyle("notification error");
    } else {
      addToCart(product);
      setNotification(`${product.name} has been added to your cart!`);
      setIcon(<FaCheckCircle className="checkMark" />);
      setNotificationStyle("notification success");
    }
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
        <div className={NotificationStyle}>
          {icon} <p>{notification}</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
