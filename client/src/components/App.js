import AboutUs from "./AboutUs";
import Shop from "./Shop"
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import Carts from "./Carts"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CartProvider from "../CartContext";
import React, { useEffect, useState } from "react";
import Login from "./LoginForm";
import Signup from "./SignupForm";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
   
   
      <CartProvider>
        <PayPalScriptProvider
    options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
       <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/shop"  element={<Shop/>} />
            <Route exact path="/cart"  element={<Carts/>} />
            <Route exact path="/aboutus"  element={<AboutUs/>} />
            <Route exact path="/" element={<Signup user={user} setUser={setUser}/>}/>
            <Route exact path="/login" element={<Login user={user} setUser={setUser}/>}/>
          </Routes>
          </PayPalScriptProvider>
        </CartProvider>
      
      
     
   
  );
}

export default App;


     