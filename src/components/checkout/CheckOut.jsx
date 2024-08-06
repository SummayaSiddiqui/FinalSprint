import React, { useState } from "react";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";
import Notification from "../notification/Notification";

const Checkout = () => {
  const { cartItems } = useShoppingCart();
  const [notification, setNotification] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cardDetails, setCardDetails] = useState("");

  const handleCheckout = () => {
    // Logic to handle checkout
    setNotification("Your order has been placed successfully!");
  };

  // Calculate subtotal and taxes
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return total + price * quantity;
  }, 0);

  const taxRate = 0.15; // Example tax rate of 7%
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">
          Your cart is empty. Add some items to start shopping!
        </p>
      ) : (
        <>
          <ul className="shopping-cart-list">
            <li className="cart-header">
              <div className="cart-column"></div>
              <div className="cart-column">Title</div>
              <div className="cart-column">Price</div>
              <div className="cart-column">Quantity</div>
              <div className="cart-column">Total Price</div>
            </li>
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
                  </div>
                  <div className="cart-column bold-item-name">
                    {item.name}
                  </div>
                  <div className="cart-column">${price.toFixed(2)}</div>
                  <div className="cart-column">{quantity}</div>
                  <div className="cart-column">${totalPrice}</div>
                </li>
              );
            })}
          </ul>
          <div className="summary-container">
            <div className="separator"></div>
            <div className="summary-row">
              <div>Subtotal</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="summary-row">
              <div>Taxes</div>
              <div>${taxes.toFixed(2)}</div>
            </div>
            <div className="summary-row total-row">
              <div>Total</div>
              <div>${total.toFixed(2)}</div>
            </div>
          </div>
          <div className="payment-details">
            <h2>Payment Details</h2>
            <form>
              <div className="payment-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="payment-row">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardDetails">Card Details</label>
                  <input
                    type="text"
                    id="cardDetails"
                    value={cardDetails}
                    onChange={(e) => setCardDetails(e.target.value)}
                  />
                </div>
              </div>
              <div className="button-container">
                <button
                  className="button-style"
                  type="button"
                  onClick={handleCheckout}>
                  Place Your Order
                </button>
              </div>
            </form>
            {notification && (
              <Notification
                message={notification}
                onClose={() => setNotification("")}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
