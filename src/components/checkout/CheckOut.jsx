// Checkout.jsx
import React from "react";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";

const Checkout = () => {
  const { cartItems } = useShoppingCart();

  const handleCheckout = () => {
    // Logic to handle checkout
    alert("Checkout successful!");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
