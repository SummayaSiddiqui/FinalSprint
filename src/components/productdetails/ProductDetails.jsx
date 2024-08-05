import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const { addToCart } = useShoppingCart();

  console.log("Product Image URL:", product.image); // Ensure this is a valid URL
  return (
    <div className="detail-container">
      <h1>{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <div key={product.id} className="book-details">
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
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
