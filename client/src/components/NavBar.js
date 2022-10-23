import { CiSearch } from "react-icons/ci";
import {RiAccountPinBoxFill} from "react-icons/ri";
import {IoMdHelpCircle} from "react-icons/io";
import {FaShoppingCart} from "react-icons/fa"
import { Link} from "react-router-dom";


function NavBar() {
  return (
    <div className=' sticky top-0 flex flex-col w-full h-32 max-md:h-full  mb-10   font-serif z-10 shadow-lg '>
<div className='w-full h-1/2  bg-slate-50 flex justify-between max-md:h-36 max-md:flex-col '>


   <form className=' mt-1 absolute left-72 max-md:left-0' > 
   <button><CiSearch size={28} className=' absolute top-1.5 mr-20 hover:scale-125 hover:text-slate-600 cursor-pointer '/></button>

   <input  className=" p-1 border w-96 text-center  border-slate-500 rounded-lg" placeholder="Search products, brands, and categories" type="text"/>
   <button className='bg-black  ml-2 mt-1 w-20 h-8 text-[color:white] rounded-md hover:underline hover:scale-75'> Search</button>
   

   </form>


<div >
  <RiAccountPinBoxFill size={28} className="absolute left-2/4 ml-64 top-2.5 hover:scale-125 hover:text-slate-600 cursor-pointer max-md:left-0 max-md:ml-0 
 max-md:mt-16 
  
  "/>
  <h3 className="absolute left-2/4 ml-72 top-2.5 font-bold  max-md:left-0
  max-md:ml-8 max-md:mt-16
  "> Account</h3>
</div>

<div className="max-md:hidden">
<IoMdHelpCircle size={28} className='absolute left-2/4 ml-96 top-2.5 hover:scale-125 hover:text-slate-600 cursor-pointer'/>
<h3 className="absolute top-2.5 right-44 font-bold "> Help</h3>
</div>

<div className="max-md:mr-4 max-md:mt-16">

  <FaShoppingCart size={28} className='mr-20 mt-2.5  ml-2 hover:scale-125 hover:text-slate-600 cursor-pointer max-md:ml-0'/>
  <h3 className="absolute top-2.5 ml-10 font-bold max-md:top-28 max-md:ml-8"> Cart</h3>
</div>

</div >


<div  className='w-full h-1/2 text-[color:white] bg-black flex  justify-between items-center  max-md:flex-col '>
            <Link className="ml-5 hover:underline ">Electronics</Link>

          <Link className="hover:underline">Food Stuffs</Link>
          <Link className="hover:underline">Fashion</Link>
          <Link className="hover:underline">Books</Link>
          <Link className="hover:underline">Health&Beauty</Link>
          <Link className="hover:underline">Appliances</Link>
          <Link className="hover:underline">Phones&Tablets</Link>
          <Link className="hover:underline">Sporting Goods</Link>
          <Link className="mr-5 hover:underline">Baby Products</Link>
</div>
  
</div>
  )
}

export default NavBar