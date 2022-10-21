import NavBar from "./NavBar"


function Cart() {
  return (
<>

<NavBar/>

<div className='flex justify-between  mx-7  font-serif ' >
    <div className='flex flex-col w-full h-fit relative '>

     <div className='bg-slate-100	pl-4 w-4/5 h-96 mb-6 rounded-2xl shadow-2xl'>
     <img src="https://raw.githubusercontent.com/Elvis-Munene/Abojani-Academy-web-app/master/assets/images/Rectangle%2010.png"  
     
     width="250" height="150" 
     alt=""  className='mt-8 ml-2 hover:scale-75'/>

    <p className='absolute ml-72 top-10'> Women long sleeve shirt</p> 
    <p className='absolute left-1/2 ml-6 top-10'> 1</p> 
    <p className='absolute left-1/2 ml-24 top-10'>Ksh  3000</p> 
    <p className='absolute left-1/2 ml-48 top-10'>Ksh 3000</p> 


<button className='bg-[color:red] font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-1 mt-10 text-sm cursor-pointer hover:bg-red-700 hover:text-black'>
    REMOVE
  </button>

   <div className='absolute left-2/4 top-60 '>
   <button className='bg-[color:red] font-semibold p-2.5 border-none rounded-md w-12 h-12 mr-4  text-sm cursor-pointer hover:bg-red-700 hover:text-black'>
     +</button>
      1
 <button className='bg-[color:red] font-semibold p-2.5 border-none  rounded-md w-12 h-12 ml-4  text-sm cursor-pointer hover:bg-red-700 hover:text-black'>
 - </button>

   </div>

     </div>


     



    </div>



<div className='bg-black w-80 h-80 text-[color:white] rounded-xl shadow-2xl font-bold'>
<h5 className='ml-14 mt-16 text-base'> CART SUMMARY </h5>
<h6 className='ml-16 mt-14 text-xs'>SubTotal Ksh3,000</h6>
      
<button className='bg-orange-600 font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-10 mt-20 text-sm cursor-pointer hover:bg-green-500 hover:text-black'>
 CHECKOUT  Ksh 3,000  </button>
</div>


    </div>

    </>
  )
}

export default Cart