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
import Login from "./LoginForm";
import Signup from "./SignupForm";
import AboutUs from "./AboutUs";
import Profile from "./Profile";

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
      <NavBar user={user} setUser={setUser} setSearchInput={setSearchInput} searchInput={searchInput} />
          <Routes>
            <Route exact path="/" element={<Home  />} />
            <Route exact path="/aboutus" element={<AboutUs/>} />
            <Route exact path="/account" element={<Profile user={user} setUser={setUser} />} />
            <Route exact path="/cart" element={<Carts user={user} setUser={setUser}/>} />
            <Route exact path="/electronics"  element={<Electronics/>} />
            <Route exact path="/foodstuffs"  element={<FoodStuffs/>} />
            <Route exact path="/fashion"  element={<Fashion/>} />
            <Route exact path="/books"  element={<Books/>} />
            <Route exact path="/beauty"  element={<Beauty/>} />
            <Route exact path="/phones"  element={<Phones/>} />
            <Route exact path="/sporting-goods"  element={<SportingGoods/>} />
            <Route exact path="/baby-products"  element={<BabyProducts/>} />
            <Route exact path="/products/:id"  element={<SingleProduct/>}/>
            <Route exact path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route exact path="/signup" element={<Signup user={user} setUser={setUser} />} />
            <Route path="/search/:keywords" element={<SearchBar results={results}/>}/>
          </Routes>
        </CartProvider>

      </div>
  );
}

export default App;


     