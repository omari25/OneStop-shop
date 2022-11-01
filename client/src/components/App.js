import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Electronics from "./Electronics";
import FoodStuffs from "./FoodStuffs";
import Books from "./Books";
import Phones from "./Phones";
import Fashion from "./Fashion";
import Beauty from "./Beauty";
import BabyProducts from "./BabyProducts";
import SportingGoods from "./SportingGoods";
import SearchBar from "./SearchBar";
import SingleProduct from "./SingleProduct";
import CartProvider from "../CartContext";
import Carts from "./Carts";
import Login from "./Login";
import Signup from "./SignupForm";
import AboutUs from "./AboutUs";
import Profile from "./Profile";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";
import SingleItemCheckout from "./SingleItemCheckout";


function App() {
  const [user, setUser] = useState(null);

  const [searchInput, setSearchInput] = useState("")

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/products")
    .then(response => response.json())
    .then((data) => {
      setData(data)
    })
  }, [])

  const results = data.filter(data=>data.product_name.toLowerCase().includes(searchInput))


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  
  return (
     <div className="bg-white w-full">
      <CartProvider>
      <PayPalScriptProvider
    options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <NavBar user={user} setUser={setUser} searchInput={searchInput} setSearchInput={setSearchInput}/>
         
          <Routes>
            <Route exact path="/" element={<Home  />} />
            <Route exact path="/aboutus" element={<AboutUs/>} />
            <Route exact path="/account" element={<Profile user={user} setUser={setUser} />} />
            <Route exact path="/cart" element={<Carts user={user} setUser={setUser}/>} />
            <Route exact path="/checkout" element={<Checkout user={user} setUser={setUser} />} />
            <Route exact path="/checkout/:id" element={<SingleItemCheckout user={user} setUser={setUser}/>} />

            <Route exact path="/electronics"  element={<Electronics/>} />
            <Route exact path="/foodstuffs"  element={<FoodStuffs/>} />
            <Route exact path="/fashion"  element={<Fashion/>} />
            <Route exact path="/books"  element={<Books/>} />
            <Route exact path="/beauty"  element={<Beauty/>} />
            <Route exact path="/phones"  element={<Phones/>} />
            <Route exact path="/sporting-goods"  element={<SportingGoods/>} />
            <Route exact path="/baby-products"  element={<BabyProducts/>} />
            <Route exact path="/products/:id"  element={<SingleProduct user={user}/>}/>
            <Route exact path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route exact path="/signup" element={<Signup user={user} setUser={setUser} />} />
            <Route path="/search/:keywords" element={<SearchBar results={results}/>}/>
          </Routes>
          </PayPalScriptProvider>

        </CartProvider>
      </div>
  );
}

export default App;