import NavBar from "./NavBar"


function Cart() {
  return (
<>

<NavBar/>

<div className='flex justify-between  mx-7  font-serif ' >
    <div className='flex flex-col w-full h-fit '>

     <div  style={{width:'65%'}} className='bg-slate-100	pl-4  h-96 mb-6 rounded-2xl shadow-2xl relative'>
     <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%2010.png"  
     
     width="250" height="150" 
     alt=""  className='mt-8 ml-2 hover:scale-75'/>

    <p className='absolute left-72 top-10'><span className="font-semibold ml-4"> Product</span><br/><br/> Women long sleeve shirt</p> 
    <p className='absolute left-1/2 ml-24 top-10'><span className="font-semibold ">Quantity</span><br/><br/> <span className="ml-4 "> 1</span></p> 
    <p className='absolute left-1/2 ml-48 top-10'><span className="font-semibold">Price</span><br/><br/> Ksh  3,000</p> 
    <p className='absolute left-1/2 ml-72 top-10'><span className="font-semibold">SubTotal</span><br/><br/>Ksh 3,000</p> 


<button className=' font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-1 mt-10 text-sm cursor-pointer bg-[red]  hover:scale-75 hover:text-black'>
    REMOVE
  </button>

   <div className='absolute left-2/4 top-60 '>
   <button className='bg-[color:black] text-[color:white] font-extrabold p-2.5 border-none rounded-md w-12 h-12 mr-4  text-sm cursor-pointer hover:scale-125 '>
     +</button>
      1
 <button className='bg-[color:black]  font-extrabold text-[color:white] p-2.5 border-none  rounded-md w-12 h-12 ml-4  text-sm cursor-pointer hover:scale-125'>
 - </button>

   </div>
</div>





</div>






<div className='fixed right-1 bg-black w-80 h-80 text-[color:white] rounded-xl shadow-2xl font-bold'>
<h5 className='ml-16 mt-16 text-base'> CART SUMMARY </h5>
<h6 className='ml-20 mt-14 text-sm'>SubTotal  Ksh 3,000</h6>
      
<button className='bg-[color:#EA4335] font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-10 mt-20 text-sm cursor-pointer hover:bg-red-700 hover:text-black'>
 CHECKOUT  Ksh 3,000  </button>
</div>


    </div>

    </>
  )
}

export default Cart