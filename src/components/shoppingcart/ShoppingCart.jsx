import React from "react";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useShoppingCart();
  const navigate = useNavigate();
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <>
          <p className="empty-cart-message">Opps, Your Cart is Empty!</p>
          <Link to="/" className="fill-cart-button">
            Add Items to Cart
          </Link>

          <i className="fas fa-shopping-cart empty"></i>
        </>
      ) : (
        <>
          <ul className="shopping-cart-list">

            {cartItems.map((item) => {
              const price = parseFloat(item.price) || 0;
              const quantity = parseInt(item.quantity, 10) || 0;
              const totalPrice = (price * quantity).toFixed(2);

              return (
                <li key={item.id} className="cart-item">
                  <div className="cart-column">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />
                  </div>{" "}
                  <div className="book-info">
                    <div className="cart-column bold-item-name" id="book-name">
                      {item.name}
                    </div>
                    <div className="pricing-info">
                    <div className="cart-column price-quant">
                      <p>Each</p>
                      <p>${price.toFixed(2)}</p>
                    </div>
                    <div className="cart-column price-quant">
                      <p>Quantity</p>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        className="cart-quantity"
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value, 10)
                          )
                        }
                      />
                    </div>
                    <div className="cart-column price-quant">
                      <p>Total</p>
                      <p>${totalPrice}</p>
                    </div>
                    <div className="cart-column">
                      <i
                        className="fas fa-trash-alt remove-icon"
                        onClick={() => removeFromCart(item.id)}
                      ></i>
                    </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="checkout-container">
            <button className="button-style" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
