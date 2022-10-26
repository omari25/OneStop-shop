import { CartContext } from "../CartContext";
import { useContext } from "react";
import Cart from "./Cart";



function Carts() {
  const cart = useContext(CartContext);

  const items= cart.items.map(c=>{
    return <Cart key={c.id} cart={cart} c={c}/>
  })

console.log(cart)

  return (
<>


<div className='flex justify-between  mx-7  font-serif max-md:absolute max-md:flex-col-reverse ' >
<div   className='flex flex-col w-full h-fit }  '>

 {items}

  </div> 

<div className='fixed right-1 bg-black w-80 h-80 text-[color:white] rounded-xl shadow-2xl font-bold max-md:relative max-md:mb-10 max-md:ml-32'>
<h5 className='ml-16 mt-16 text-base'> CART SUMMARY </h5>
<h6 className='ml-20 mt-14 text-sm'>SubTotal  Ksh {cart. getTotalCost()}</h6>
      
<button className='bg-[color:#EA4335] font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-10 mt-20 text-sm cursor-pointer hover:bg-red-700 hover:text-black'>
 CHECKOUT {cart. getTotalCost()} </button>
</div>
    </div>

    </>
  )
}

export default Carts