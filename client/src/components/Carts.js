import { CartContext } from "../CartContext";
import { useContext } from "react";
import Cart from "./Cart";

function Carts() {
  const cart = useContext(CartContext);

  const items = cart.items.map(c => {
    return <Cart key={c.id} cart={cart} c={c} />
  })

  return (
    <>
      <div className='flex justify-between mx-8 max-md:flex-col-reverse relative'>
        
        <div className="w-[70%]">{items}</div>

        <div className='flex flex-col items-center justify-between fixed right-8 bg-[black] w-[25%] h-80 text-[white] rounded-xl font-bold py-8'>
          <div>
            <h5 className='text-base mb-8'> CART SUMMARY </h5>
            <h6 className='text-sm text-center'>SubTotal <br /> Ksh: <span className="text-[#00ffff]">{cart.getTotalCost()}</span></h6>
          </div>
          
          <button className='bg-[red] px-8 py-2 rounded-md mb-4'>CHECKOUT {cart.getTotalCost()} </button>
        </div>

      </div>
    </>
  )
}

export default Carts