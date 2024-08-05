// import React from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../../api";
// import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = getProductById(parseInt(id));
//   const { addToCart } = useShoppingCart();

//   return (
//     <div className="detail-container">
//       <h1>{product.name}</h1>
//       <p className="product-description">{product.description}</p>
//       <div key={product.id} className="book-details">
//         <div className="book-price">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="detail-image"
//           />

//           <p className="product-price">Price: ${product.price}</p>
//         </div>
//         <p className="product-description">{product.summary}</p>
//       </div>
//       <button className="button-style" onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";
import Notification from "../notification/Notification";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const { addToCart } = useShoppingCart();
  const [notification, setNotification] = useState("");

  const handleAddToCart = () => {
    addToCart(product);
    setNotification(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="detail-container">
      <h1>{product.name}</h1>
      <p className="product-description">{product.description}</p>

      <div className="book-details">
        <div className="book-price">
          <img
            src={product.image}
            alt={product.name}
            className="detail-image"
          />
          <p className="product-price">Price: ${product.price}</p>
        </div>
        <p className="product-description">{product.summary}</p>
      </div>
      <button className="button-style" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification("")}
        />
      )}
    </div>
  );
};

export default ProductDetails;
