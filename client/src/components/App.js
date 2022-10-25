import React from "react";
import Carts from "./Carts"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CartProvider from "../CartContext";

function App() {
  return (
    <CartProvider>
    <Routes>
    <Route  path="/carts" element={<Carts/>}/>
    <Route  path="/checkout" element={<Checkout/>}/> 
     </Routes>
    </CartProvider>
  );
}

export default App;