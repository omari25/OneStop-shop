import React from "react";
import AboutUs from "./AboutUs";
import Shop from "./Shop"
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import Cart from "./Cart"

function App() {
  return (

    

   <div className="bg-white w-full h-full">
        
      
      
     <NavBar />
     
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/shop"  element={<Shop/>} />
          <Route exact path="/cart"  element={<Cart/>} />
          <Route exact path="/aboutus"  element={<AboutUs/>} />
        </Routes>
        
      
      <Footer/>
    </div>
     
   
  );
}

export default App;


     