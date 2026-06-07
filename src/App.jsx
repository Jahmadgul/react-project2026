
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Navbar from "./components/navbar";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";

import "./App.css";
export default function App() {

  return (
    <div className="app">
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>  
      </CartProvider>
    </div>
  );
}


 