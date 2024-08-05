import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/productlist/ProductList";
import ProductDetails from "./components/productdetails/ProductDetails";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import CheckOut from "./components/checkout/CheckOut";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./components/shoppingcartcontext/ShoppingCartContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <ShoppingCartProvider>
          <Header />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </div>
          <Footer />
        </ShoppingCartProvider>
      </div>
    </Router>
  );
};

export default App;
