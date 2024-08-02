import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api";
import { useShoppingCart } from "../shoppingcartcontext/ShoppingCartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const { addToCart } = useShoppingCart();

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
