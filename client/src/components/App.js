import AboutUs from "./AboutUs";
import Shop from "./Shop"
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import Cart from "./Cart"
import React, { useEffect, useState } from "react";
import Login from "./LoginForm";
import Signup from "./SignupForm";

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
    <div>
     <div className="bg-white w-full h-full">
       <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/shop"  element={<Shop/>} />
            <Route exact path="/cart"  element={<Cart/>} />
            <Route exact path="/aboutus"  element={<AboutUs/>} />
            <Route exact path="/" element={<Signup user={user} setUser={setUser}/>}/>
            <Route exact path="/login" element={<Login user={user} setUser={setUser}/>}/>
          </Routes>
        <Footer/>
      </div>
    </div>
     
   
  );
}

export default App;


     