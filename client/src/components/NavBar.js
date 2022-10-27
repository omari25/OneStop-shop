import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";
import shopit from "./images/Shop-It (1) 1.png";
// import SearchBar from "./SearchBar";




function NavBar({setSearchInput, searchInput}) {
  

  // const [searchInput, setSearchInput] = useState("")
  // // const [result, setResult] = useState([])
  // // const [searchKey, setSearchKey] = useState("")
  

  // const [data, setData] = useState([])
  // // const searchKeyWords = props.match.params.keywords

  // useEffect(() => {
  //   fetch("/products")
  //   .then(response => response.json())
  //   .then((data) => {
  //     setData(data)
  //       console.log(data)
  //       // console.log(items)
  //   })
  //   }, [])
    
    


  //   // const clearInput = () => {
  //   //   let searchInputValue = document.getElementsByClassName("searchInput")[0]
  //   //   searchInputValue.value = ""
  //   //   console.log(searchInputValue)
  //   // }

  //   // console.log(searchInput)
  //   // console.log(data.filter(data=>data.product_name.includes("Tv")))
  //   const results = data.filter(data=>data.product_name.toLowerCase().includes(searchInput))
  //   console.log(results)

  return (
    <div className=' sticky top-0 flex flex-col w-full h-32 max-md:h-full mb-10   font-serif z-10 shadow-lg '>
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
          <div className='w-[30%] flex justify-center items-center cursor-pointer'>
            <RiAccountPinBoxFill className="text-3xl mr-2"/>
            <h3 className=""> Account</h3>
          </div>

          <div className="w-[30%] flex justify-center items-center cursor-pointer">
            <IoMdHelpCircle className='text-3xl mr-2' />
            <h3 className=""> Help</h3>
          </div>

          <div className="w-[30%] flex justify-center items-center cursor-pointer">
            <FaShoppingCart className='text-3xl mr-2' />
            <h3 className=""> Cart</h3>
          </div>
        </div>
      </div >


      <div className='w-full h-1/2 text-[color:white] bg-black flex  justify-around items-center  max-md:flex-col '>
        <Link to={"/electronics"} className="hover:underline ">Electronics</Link>
        <Link to={"/foodstuffs"} className="hover:underline">Food Stuffs</Link>
        <Link to={"/fashion"} className="hover:underline">Fashion</Link>
        <Link to={"/books"} className="hover:underline">Books</Link>
        <Link to={"/beauty"} className="hover:underline">Health&Beauty</Link>
        <Link to={"/phones"} className="hover:underline">Phones&Tablets</Link>
        <Link to={"/sporting-goods"} className="hover:underline">Sporting Goods</Link>
        <Link to={"/baby-products"} className="hover:underline">Baby Products</Link>
      </div>
    </div>
  )
}

export default NavBar