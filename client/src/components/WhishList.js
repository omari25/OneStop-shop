import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


function WhishList() {

    const cart = useContext(CartContext);
    if(cart.wishList.length===0){
    return( <div className="mb-4 text-center italic font-extrabold text-4xl">
      <p> No Items in Wish List!Add some...🙃🤩</p>
     </div>)


    }



  return (
    <div className="px-10">
        <p className="mb-4 text-center italic font-extrabold text-4xl">Wish List</p>
        <div className="flex w-full flex-wrap gap-4">
          {cart.wishList.map((list) => (
              <div  key={list.id} className="w-[250px] p-2 shadow-xl mb-4 ">
                <img src={list.image_url} alt=""   
     height="1"/>
                <p className="font-bold mb-2">{list.product_name}</p>
                <p>ksh: {list.price}</p>
                <button onClick={()=>cart.deleteFromWishList(list.id)} className=" w-full bg-[black] p-3 rounded-md font-bold text-white " >Remove </button>
              </div>
            ))}
        </div>
      </div>
  )
}

export default WhishList