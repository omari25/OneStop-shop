import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CartContext } from "../CartContext";
import { useContext } from "react";

    // qali2244

function SingleProduct({user}){
    const { id } = useParams()
    const [ product, setProduct ] = useState([])
    const navigate = useNavigate()

    const cart = useContext(CartContext);
    
    useEffect(() => {
        fetch(`/products/${id}`)
        .then(response => response.json())
        .then((data) => {
        setProduct(data)
        })
    }, [])

    function handleUser(){
        if (user){
          navigate("/checkout")
        }
        else{
          navigate("/account")
        }
    }

    return (
        <div>
            {
                <div className="mx-16 flex justify-around mb-8">

                    <div className="w-[40%]">
                        <img src={product.image_url} className="w-full" alt="" />
                    </div>

                    <div className="w-[40%]">
                        <h1 className="text-2xl font-bolded">{product.product_name}</h1>
                        <h4 className="text-2xl font-bolded mt-4">Price {`Ksh: ${product.price}`}</h4>
                        <h1 className="text-2xl font-bolded mt-4">Description</h1>
                        <p>{product.description}</p>

                        <div className="flex justify-between w-full items-center mt-16">
                            <button onClick={() => {cart.addOneToCart(product.id,product)}} className="bg-[black] text-[white] w-[40%] py-2 rounded-md">Add to cart</button>
                            <button onClick={handleUser} className="bg-[black] text-[white] w-[40%] py-2 rounded-md" >Buy now</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default SingleProduct