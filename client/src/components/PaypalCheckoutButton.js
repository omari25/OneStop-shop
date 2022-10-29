import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";



const PaypalCheckoutButton = (props) => {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const cart = useContext(CartContext); 

    const { quantity } = props;

    
console.log("total",cart.items )

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




createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description:"shop-it",
          quantity:1,
          amount: {
            value:cart.getTotalCost()
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
  
  export default PaypalCheckoutButton;