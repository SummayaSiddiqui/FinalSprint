// ShoppingCart.jsx
import React from "react";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
