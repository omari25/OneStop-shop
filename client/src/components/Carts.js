import { CartContext } from "../CartContext";
import { useContext,useState,useEffect } from "react";

import Cart from "./Cart";
import { PayPalButtons } from "@paypal/react-paypal-js";




function Carts() {
  const cart = useContext(CartContext);

  const [paidFor, setPaidFor] = useState(false);

  const [total, setTotal] = useState(0);



 
  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };


  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error);
  }

  





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


{/*<button className='bg-[color:#EA4335] font-semibold p-2.5 border-none rounded-md w-48 h-12  ml-10 mt-20 text-sm cursor-pointer hover:bg-red-700 hover:text-black'>
 CHECKOUT {} </button>*/}

<PayPalButtons style={{color: "silver",layout: "horizontal", height: 48,tagline: false,shape: "pill"
}}
onClick={(data, actions) => {
    // Validate on button click, client or server side
    const hasAlreadyBoughtCourse = false;
  
    if (hasAlreadyBoughtCourse) {
      setError(
        "You already bought this course. Go to your account to view your list of courses."
      );
  
      return actions.reject();
    } else {
      return actions.resolve();
    }
  }}




createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description:"shop-it",
          amount: {
            value:getTotalCost()
          }
        }
      ]
    });
  }}

  onApprove={async (data, actions) => {
    const order = await actions.order.capture(); 
    console.log("order", order);
  
    handleApprove(data.orderID);
    
  }}

  onCancel={() => {
    // Display cancel message, modal or redirect user to cancel page or back to cart
  }}

  onError={(err) => {
    setError(err);
    console.error("PayPal Checkout onError", err);
  }}


/>

</div>


    </div>

    </>
  )
}

export default Carts