import React, { useEffect, useState } from "react";
import Slider from "./Slider";

function Shop() {
    const [shop, setShop] = useState([])
    useEffect(() => {
        fetch(
          "https://fakestoreapi.com/products"
        )
          .then((res) => res.json())
          .then((shop) => {
            setShop(shop);
            console.log(shop)
            
          });
    }, [])

    
    
    return (
      <div>
        <Slider/>
      
      <div className="border-solid container mx-auto">
       <div className="grid grid-cols-3 ">
         {shop.map((shop) => (
           <div>
      <div>
      <img className="object-scale-down h-48 w-96" src={ shop.image } />
      </div>

             <div>
               <h2>{shop.title}</h2>
             </div>
       <div>
               <h2>{shop.price}</h2>
             </div>
             
           </div>
         ))}
       </div>
      </div>
      </div>

      );
   }
   
   
   
   
   
   
export default Shop