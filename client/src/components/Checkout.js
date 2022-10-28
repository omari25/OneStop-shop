import NavBar from "./NavBar"



function Checkout() {
  return (
    <>
<NavBar/>


    <div className="h-full w-full flex max-md:flex-col  max-md:absolute 	font-serif">
   

    <div className="w-2/4 h-fit max-md:w-full flex justify-center items-center max-md:mt-0">
      <form className="px-[6vw] checkout-form w-full">
                    
          <h1 className="text-2xl font-bold ml-28 mb-12 max-md:ml-48">Billing Details</h1>
        
        <div className="flex justify-between">
          <div className="w-[45%]">
            <label htmlFor="firstname">Fisrt Name</label>
            <input
              placeholder="John"
              type="text"
              id="firstname"
            />
          </div>

          
          <div className="w-[45%]">
            <label htmlFor="lastname">Last Name</label>
            <input
              placeholder="Doe"
              type="text"
              id="lastname"
            />
          </div>
        </div>

        <div>
          <label htmlFor="card provider">Card Provider</label>
          <input
            placeholder="Visa"
            type="text"
            id='card provider'
          />
        </div>

        <div>
          <label htmlFor="account">Card Number</label>
          <input
            placeholder="1234567890"
            type="integer"
            id='account'
          />
        </div>

        <div>
        <label htmlFor="Email">Email</label>
          <input
            placeholder="johndoe@info.com"
            type="text"
            id="email"
          />
        </div>

        <div>
        <label htmlFor="phone-number">Phone number</label>
          <input
            placeholder="+254700000000"
            type="number"
            id="phone-number"
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            placeholder="Kenya"
            type="text"
            id='country'
          />
        </div>

        <div>
          <label htmlFor="city">City/Town</label>
          <input
            placeholder="Nairobi"
            type="text"
            id="city"
          />
        </div>
      </form>

    </div>



<div className="w-2/4 max-md:w-full flex-row max-md:ml-12 max-md:mt-12">

  <div className="border-b w-3/4 border-black">
    
    <div className="flex justify-between mb-12">
      <h1 className="text-xl font-bold">Product</h1>
      <h1 className="mr-16 text-xl font-bold">Subtotal</h1>
    </div> 

     <div className="flex justify-between mb-6">
      <h1>Baby blue x 1</h1>
      <h1 className="mr-16">Ksh 2,000</h1>
    </div>    

      <div className="flex justify-between mb-6">
      <h1>Subtotal</h1>
      <h1 className="mr-16">Ksh 2,000</h1>
    </div>   

    <div className="flex justify-between mb-6">
      <h1>Total</h1>
      <h1 className="mr-8 text-2xl font-extrabold">Ksh 2,000</h1>
    </div> 
     
  </div>



   <form className=" mt-4"> 

    <input type="radio"   name="Direct Bank Transfer" value="true" />
    <label htmlFor="Direct Bank Transfer" className="ml-4 text-sm">Direct Bank Transfer</label><br/>
    <p className="  ml-4 text-sm w-3/4 mt-4 mb-8  ">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

  
    <input type="radio"   name="Cash On Delivery" value="true" />
    <label htmlFor="Cash On Delivery" className="ml-4 text-sm">Cash On Delivery</label><br/>
    

    <p className="  ml-4 text-sm w-3/4 mt-4 mb-8  ">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-black">privacy policy.</span> </p>

<button className="w-3/4 bg-[red] p-3 hover:scale-75 rounded-md text-white" type="submit">Place Order</button>

 </form>
      
  </div>

  </div>
  </>
  )
}

export default Checkout