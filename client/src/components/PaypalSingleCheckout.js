import { PayPalButtons } from "@paypal/react-paypal-js";
import { CartContext } from "../CartContext";
import { useContext,useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";



const PaypalSingleCheckout = (props) => {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    const cart = useContext(CartContext); 


    const { inCart,product} = props;

console.log("inCart",inCart)
    
console.log("total",cart.getTotalCost() )

    const handleApprove = (orderId) => {
        // Call backend function to fulfill order
    
        // if response is success
        if (orderId){
          setPaidFor(true);
          cart.deleteFromCart(product.id)
          navigate("/");
        }
        // Refresh user's account or subscription status
    
        // if response is error
        // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
      };


      if (error) {
        // Display error message, modal or redirect user to error page
        alert(error);
      }

  
    return (
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


  forceReRender={[inCart]}
  //setBasket(cart.getTotalCost())


createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description:product.product_name,
          amount: {
            value:inCart
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
    );
  }
  
  export default PaypalSingleCheckout;