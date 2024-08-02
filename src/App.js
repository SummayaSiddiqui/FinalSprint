import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/productlist/ProductList";
import ProductDetails from "./components/productdetails/ProductDetails";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import CheckOut from "./components/checkout/CheckOut";
import { ShoppingCartProvider } from "./components/shoppingcartcontext/ShoppingCartContext";

const App = () => {
  return (
    <Router>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
  );
};

export default App;
