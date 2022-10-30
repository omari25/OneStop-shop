import { useState } from "react";
import Footer from "./Footer"
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { useState } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";


function Checkout({user, setUser}) {
  const cart = useContext(CartContext);
  const [enabled, setEnabled] = useState(false);
  const[inCart,setIncart]=useState(cart.getTotalCost())


  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmitOrder(e){
    e.preventDefault();
    fetch(`/billing/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        county: county,
        city: city,
        address: address,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));
        // navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
    <div className="w-full font-serif mb-10">
    <form onSubmit={handleSubmitOrder} className="px-[6vw] checkout-form w-full flex max-md:flex-col justify-between">
      <div className="w-[45%] max-md:w-[100%]">
        <h1 className="text-2xl font-bold text-center mb-4">Billing Details</h1>

        <div>
          <label htmlFor="county">County</label>
          <input placeholder="Nairobi" type="text" id='county'  value={county} onChange={(e) => setCounty(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="city">City/Town</label>
          <input placeholder="Nairobi" type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="card provider">Address</label>
          <input placeholder="Kitengela" type="text" id='card provider' value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
      </div>

      <div className="w-[45%] max-md:w-[100%]">
        <div className="border-b w-full border-black pb-2 mb-4">
          <h1 className="text-xl text-center font-bold">Order summary</h1>
        </div>

        <div className="border-b w-full border-black px-4">
        <div className="flex justify-between mb-2">
              <h1>Item price</h1>
              <h1 className="">Ksh {cart.getTotalCost()}</h1>
            </div>

          <div className="flex justify-between mb-2">
            <h1>Shipping</h1>
            <h1 className="">Free</h1>
          </div>

          <div className="flex justify-between mb-2">
              <h1>Total</h1>
              <h1 className=" text-2xl font-extrabold">Ksh {cart.getTotalCost()}</h1>
            </div>
        </div>
        <div className=" mt-4 w-fill">
          <p className="text-sm mb-2 mx-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <p className="text-sm mb-8 mx-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-black">privacy policy.</span> </p>
          <button onClick={() => {
                            setEnabled(!enabled);
                            setIncart(cart.getTotalCost())
                        }} className={`${!enabled ?''  : 'hidden'} w-full bg-[red] p-3 rounded-md font-bold text-white" type="submit`}>Place Order</button>
            <div  className={`${enabled ?''  : 'hidden'}
            `}><PaypalCheckoutButton inCart={inCart}/></div>
        </div>
        {errors.map((err) => (
          <p className="text-[red]" key={err}>{err}</p> 
        ))}
      </div>
    </form>

  </div>
  <Footer />
</>
  )
}

export default Checkout