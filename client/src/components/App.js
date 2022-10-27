import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import Home from "./Home";
import Cart from "./Cart"
import Electronics from "./Electronics";
import FoodStuffs from "./FoodStuffs";
import Books from "./Books";
import Phones from "./Phones";
import Fashion from "./Fashion";
import Beauty from "./Beauty";
import BabyProducts from "./BabyProducts";
import SportingGoods from "./SportingGoods";
import SearchBar from "./SearchBar";
// import Login from "./LoginForm";
// import Signup from "./SignupForm";

function App() {
  const [user, setUser] = useState(null);

  const [searchInput, setSearchInput] = useState("")
  // const [result, setResult] = useState([])
  // const [searchKey, setSearchKey] = useState("")
  

  const [data, setData] = useState([])
  // const searchKeyWords = props.match.params.keywords

  useEffect(() => {
    fetch("/products")
    .then(response => response.json())
    .then((data) => {
      setData(data)
        console.log(data)
        // console.log(items)
    })
    }, [])
    
    


    // const clearInput = () => {
    //   let searchInputValue = document.getElementsByClassName("searchInput")[0]
    //   searchInputValue.value = ""
    //   console.log(searchInputValue)
    // }

    // console.log(searchInput)
    // console.log(data.filter(data=>data.product_name.includes("Tv")))
    const results = data.filter(data=>data.product_name.toLowerCase().includes(searchInput))
    // console.log(results)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
     <div className="bg-white w-full h-full">
      <NavBar user={user} setUser={setUser} setSearchInput={setSearchInput} searchInput={searchInput} />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cart"  element={<Cart/>} />
          <Route exact path="/aboutus"  element={<AboutUs/>} />
          <Route exact path="/electronics"  element={<Electronics/>} />
          <Route exact path="/foodstuffs"  element={<FoodStuffs/>} />
          <Route exact path="/fashion"  element={<Fashion/>} />
          <Route exact path="/books"  element={<Books/>} />
          <Route exact path="/beauty"  element={<Beauty/>} />
          <Route exact path="/phones"  element={<Phones/>} />
          <Route exact path="/sporting-goods"  element={<SportingGoods/>} />
          <Route exact path="/baby-products"  element={<BabyProducts/>} />
          {/* <Route exact path="/search"  element={<SearchBar/>} /> */}
          <Route path="/search/:keywords" element={<SearchBar results={results}/>}/>
        </Routes>
      </div>
  );
}

export default App;


     