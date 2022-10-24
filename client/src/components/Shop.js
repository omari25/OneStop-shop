import React, { useEffect, useState } from "react";

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

    const renderTitle = (title) => {
        return title.length > 80 ? title.substr(0, 80).trim() + "..." : title;
      };
    
      const renderDesc = (desc) => {
        return desc.length > 100 ? desc.substr(0, 100).trim() + "..." : desc;
      };

    const myshop = shop.map((shop) => (
      <div className="h-64 w-64">
        <div key={shop.id} className="shop">
            
          <img className="shop-image" src= {shop.image} alt="logo" />
          <p>product title:{renderTitle(shop.title)}</p>
          <p>product description:{renderDesc(shop.description)}</p>
          <p>product price:{(shop.price)}</p>
        </div>
      </div>
    ));
    return (
        <div className="grid grid-cols-3 ">
            {myshop}
        </div>
   )
}
export default Shop