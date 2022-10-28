import React from 'react'

function Cart({ cart, c }) {

  return (
    <div className='bg-slate-100 w-full mb-6 rounded-2xl shadow-2xl flex justify-around py-4'>

      <div className='flex flex-col justify-between w-[25%]'>
        <h1 className='text-center font-bold text-xl mb-4'>{c.product_name}</h1>
        <img src={c.image_url} alt="" className='w-[100%]' />
        <p className='text-center mt-4'>{`Price: Ksh ${c.price}`}</p>
      </div>

      <div className='flex flex-col w-[15%] items-center '>
        <h1 className='text-center font-bold text-xl mb-4'>Quantity</h1>
        <button onClick={() => cart.addOneToCart(c.id)} className='bg-[black]  text-[white] font-bold rounded-md w-12 h-12 text-2xl cursor-pointer mt-8 mb-6'>+</button>
        <p>{cart.getProductQuantity(c.id)}</p>
        <button onClick={() => cart.removeOneFromCart(c.id)} className='bg-[black]  text-[white] font-bold rounded-md w-12 h-12 text-2xl cursor-pointer mt-6'>-</button>
      </div>

      <div className=''>
        <div className='text-center'>
          <p className='text-center font-bold text-xl mb-4'>SubTotal</p>
          <p>{`Ksh ${cart.getProductQuantity(c.id) * c.price}`}</p>
        </div>
        
        <button onClick={() => cart.deleteFromCart(c.id)} className=' font-semibold p-3 w-40 text-[white] rounded-md mt-20 text-sm cursor-pointer bg-[red] '>REMOVE</button>
      </div>

    </div>
  )
}

export default Cart