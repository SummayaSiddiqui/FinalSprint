// import React, { createContext, useContext, useState } from "react";

// const ShoppingCartContext = createContext();

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext);
// };

// export const ShoppingCartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [
//       ...prevItems,
//       { ...product, quantity: 1 },
//     ]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   const updateCartItemQuantity = (productId, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateCartItemQuantity,
//       }}>
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// };

// ShoppingCartContext.js
import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
