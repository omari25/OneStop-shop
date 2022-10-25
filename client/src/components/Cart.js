import React from 'react'

function Cart({cart,c}) {


  return (
    <div  style={{width:'70%'}}    className='bg-slate-100  max-md:bg-white pl-4 h-96 mb-6 rounded-2xl shadow-2xl max-md:shadow-none flex '>

    <div>
      <img src={c.image} 
      
      width="250" height="150" 
      alt=""  className='mt-8 ml-2 hover:scale-75'/>
 
   <button onClick={() => cart.deleteFromCart(c.id)} className=' font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-0 mt-10 text-sm cursor-pointer bg-[red]  hover:scale-75 hover:text-black'>
     REMOVE
   </button> 
 </div>
 
   <div className="flex flex-col">
     <div className="flex">
     <p className=" ml-8 mr-4"><span className="font-semibold  ml-4 max-md:ml-1"> Product</span><br/><br/> {c.title}</p> 
     <p><span className="font-semibold ">Quantity</span><br/><br/> <span className="ml-4 ">{cart.getProductQuantity(c.id)}</span></p> 
     <p className=" ml-8 mr-4"><span className="font-semibold">Price</span><br/><br/> {c.price}</p> 
     <p className='mr-0'><span className="font-semibold">SubTotal</span><br/><br/>{cart.getProductQuantity(c.id)*c.price}</p> 
   </div> 
 
 <div className="ml-32 mt-44 max-md:mt-20 ">
    <button onClick={() => cart.addOneToCart(c.id)} className='bg-[color:black] text-[color:white] font-extrabold p-2.5 border-none rounded-md w-12 h-12 mr-4  text-sm cursor-pointer hover:scale-125 '>
      +</button>
       {cart.getProductQuantity(c.id)}
   <button  onClick={() => cart.removeOneFromCart(c.id)} className='bg-[color:black]  font-extrabold text-[color:white] p-2.5 border-none  rounded-md w-12 h-12 ml-4  text-sm cursor-pointer hover:scale-125'>
  - </button>
    </div>
   </div>
   </div>
  )
}

export default Cart