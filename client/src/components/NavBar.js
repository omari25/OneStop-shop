import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import shopit from "./images/Shop-It (1) 1.png";
// import SearchBar from "./SearchBar";




function NavBar({ user, setSearchInput, searchInput }) {

  const cart = useContext(CartContext);
  const totalItems=cart.items.reduce((acc,c)=>acc+c.quantity,0)


  return (
    <div className='sticky top-0 flex flex-col w-full h-32 mb-10 z-10 shadow-lg '>

      <div className='w-full h-1/2 flex justify-between bg-[white]'>

        <Link to={"/"} className="w-[15%]">
            <img src={shopit} alt="" className="h-full" />
        </Link>


        <form className='w-[50%] flex justify-center items-center realtive'>
          <button><CiSearch className='fixed text-3xl top-4 ml-2 hover:text-slate-600 cursor-pointer' /></button>
          <input 
          className="outline-none pl-12 h-[40px] w-[70%] mr-4 border border-slate-500 rounded-lg" 
          placeholder="Search products, brands, and categories" 
          type="text" 
          onChange={(e) => setSearchInput(e.target.value)}
          />
          {/* <Link to={searchInput === "" ? "/" : "/search/" + searchInput}  >
              <button className='bg-black w-20 h-[40px] text-[color:white] rounded-md hover:underline'> Search</button>
          </Link> */}
          <Link to={searchInput === "" ? "/" : "/search/" + searchInput} >
              <button className='bg-black w-20 h-[40px] text-[color:white] rounded-md hover:underline'> 
              Search
              </button>
          </Link>
          {/* <button className='bg-black w-20 h-[40px] text-[color:white] rounded-md hover:underline'> Search</button> */}
        </form>

        {/* <ul>
          {results.map((result) => (
              <li key={result.product_id}>
                {result.product_name}
                <img src={result.image_url} alt="" className="w-full"/>
              </li>
            ))}
        </ul> */}

        <div className="w-[30%] flex justify-center items-center">
          <Link to={"/account"} className='w-[30%] flex justify-center items-center cursor-pointer'>
            <RiAccountPinBoxFill className="text-3xl mr-2"/>
            <h3 className="">{user ? (`${user.first_name} ${user.last_name}`) : "Account"}</h3>
          </Link>

          <Link to={"/aboutus"} className="w-[30%] flex justify-center items-center cursor-pointer">
            <IoMdHelpCircle className='text-3xl mr-2' />
            <h3 className=""> Help</h3>
          </Link>

          <Link to={"/cart"} className="w-[30%] flex justify-center items-center cursor-pointer">
            <div className="relative p-2">
             <FaShoppingCart className='text-3xl mr-2' />
              <div className="absolute w-7 h-7 bg-white rounded-full top-0 right-0 text-center border-2 border-black">{totalItems===0?"0":totalItems}</div>
            </div>
            <h3 className="">Cart</h3>
          </Link>
        </div>
      </div >


      <div className='w-full h-1/2 text-[color:white] bg-black flex  justify-around items-center  max-md:flex-col '>
        <Link to={"/electronics"} className="hover:underline ">Electronics</Link>
        <Link to={"/foodstuffs"} className="hover:underline">Food Stuffs</Link>
        <Link to={"/fashion"} className="hover:underline">Fashion</Link>
        <Link to={"/books"} className="hover:underline">Books</Link>
        <Link to={"/beauty"} className="hover:underline">Health and Beauty</Link>
        <Link to={"/phones"} className="hover:underline">Phones and Tablets</Link>
        <Link to={"/sporting-goods"} className="hover:underline">Sporting Goods</Link>
        <Link to={"/baby-products"} className="hover:underline">Baby Products</Link>
      </div>
    </div>
  )
}

export default NavBar