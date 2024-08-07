import React, { useState } from "react";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";
import Notification from "../notification/Notification";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

const Checkout = () => {
  const { cartItems } = useShoppingCart();
  const [notification, setNotification] = useState("");
  const [icon, setIcon] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [notificationClass, setNotificationClass] = useState("");

  const handleCheckout = () => {
    // Check if any fields are empty
    if (!firstName || !lastName || !address || !cardDetails) {
      setNotification("All fields are required to proceed.");
      setNotificationClass("notification error");
      setIcon(<IoIosWarning className="warning-icon" />);
      return;
    }

    // Logic to handle checkout
    setNotification("Your order has been placed successfully!");
    setNotificationClass("notification success");
          setIcon(<FaCheckCircle className="checkMark" />);

  };

  // Calculate subtotal and taxes
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return total + price * quantity;
  }, 0);

  const taxRate = 0.15;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
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
                        <p>x{item.quantity}</p>
                      </div>
                      <div className="cart-column price-quant">
                        <p>Total</p>
                        <p>${totalPrice}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="summary-container">
            <div className="summary-row">
              <div>Subtotal</div>
              <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="summary-row">
              <div>Taxes</div>
              <div>${taxes.toFixed(2)}</div>
            </div>
            <div className="separator"></div>
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
                  onClick={handleCheckout}
                >
                  Place Your Order
                </button>
              </div>
            </form>
            {notification && (
              <Notification
                message={notification}
                onClose={() => setNotification("")}
                className={notificationClass}
                icon={icon}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
