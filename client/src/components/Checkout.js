import Footer from "./Footer"

function Checkout() {
  return (
    <>
      <div className="h-full w-full flex max-md:flex-col font-serif">

        <div className="w-2/4 max-md:w-full flex justify-center items-center max-md:mt-0">
          <form className="px-[6vw] checkout-form w-full">
            <h1 className="text-2xl font-bold text-center mb-6">Billing Details</h1>

            <div className="flex justify-between">
              <div className="w-[45%]">
                <label htmlFor="firstname">Fisrt Name</label>
                <input placeholder="John" type="text" id="firstname" />
              </div>
              <div className="w-[45%]">
                <label htmlFor="lastname">Last Name</label>
                <input placeholder="Doe" type="text" id="lastname" />
              </div>
            </div>

            <div>
              <label htmlFor="phone-number">Phone number</label>
              <input placeholder="+254700000000" type="number" id="phone-number" />
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <input placeholder="Kenya" type="text" id='country' />
            </div>

            <div>
              <label htmlFor="city">City/Town</label>
              <input placeholder="Nairobi" type="text" id="city" />
            </div>

            <div>
              <label htmlFor="card provider">Address</label>
              <input placeholder="Kitengela" type="text" id='card provider' />
            </div>

          </form>
        </div>



        <div className="w-2/4 max-md:w-full flex-row max-md:ml-12 max-md:mt-12 pr-[12vw]">

          <div className="border-b w-full border-black pb-2 mb-4">
            <h1 className="text-xl text-center font-bold">Order summary</h1>
          </div>

          <div className="border-b full border-black px-2">

            <div className="flex justify-between mb-2">
              <h1>Item price</h1>
              <h1 className="">Ksh 2,000</h1>
            </div>

            <div className="flex justify-between mb-2">
              <h1>Shipping</h1>
              <h1 className="">Free</h1>
            </div>

            <div className="flex justify-between mb-2">
              <h1>Total</h1>
              <h1 className=" text-2xl font-extrabold">Ksh 2,000</h1>
            </div>

          </div>

          <div className=" mt-4 w-fill">
            <p className="text-sm mb-2 mx-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <p className="text-sm mb-4 mx-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-black">privacy policy.</span> </p>
            <button className="w-full bg-[red] p-3 rounded-md font-bold text-white" type="submit">Place Order</button>
          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Checkout