import { CiSearch } from "react-icons/ci";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { AiTwotoneHeart} from "react-icons/ai"

import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import shopit from "./images/Shop-It (1) 1.png";

function NavBar({ user, setSearchInput, searchInput }) {

  const cart = useContext(CartContext);
  const totalItems=cart.items.reduce((acc,c)=>acc+c.quantity,0);
  const wishLength=cart.wishList.length

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
          <Link to={searchInput === "" ? "/" : "/search/" + searchInput} >
              <button className='bg-black w-20 h-[40px] text-[color:white] rounded-md hover:underline'>Search</button>
          </Link>
        </form>

        <div className="w-[30%] flex justify-center items-center">
          <Link to={"/account"} className='w-[30%] flex justify-center items-center cursor-pointer'>
            <RiAccountPinBoxFill className="text-3xl mr-2"/>
            <h3 className="">{user ? (`${user.first_name}`) : "Account"}</h3>
          </Link>

          <Link to={"/aboutus"} className="w-[30%] flex justify-center items-center cursor-pointer">
            <IoMdHelpCircle className='text-3xl mr-2' />
            <h3 className=""> Help</h3>
          </Link>

          <Link to={"/whishlist"} className="w-[30%] flex justify-center items-center cursor-pointer">
            <AiTwotoneHeart size={28} className={`${ cart.wishList.length===0?'':'text-[red]'} text-3xl mr-2 `} />
            <div className="absolute w-7 h-7 bg-[red] rounded-full text-white top-1.5 right-[168px] text-center border-2 border-white">{wishLength}</div>
            <h3 className="">Wish List</h3>
          </Link>

          <Link to={"/cart"} className="w-[30%] flex justify-center items-center cursor-pointer">
            <div className="relative p-2">
             <FaShoppingCart className='text-3xl mr-2' />
              <div className="absolute w-7 h-7 bg-[red] rounded-full text-white top-0 right-0 text-center border-2 border-white">{totalItems===0?"0":totalItems}</div>
            </div>
            <h3 className="">Cart</h3>
          </Link>
        </div>
      </div >


      <div className='w-full h-1/2 text-[white] bg-black flex  justify-around items-center'>
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