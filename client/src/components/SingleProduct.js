// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"

// function SingleProduct(){
//     const { id } = useParams
//     const [ product, setProduct ] = useState([])
    
//     useEffect(() => {
//         fetch(`products`)
//         .then(response => response.json())
//         .then((data) => {
//         setProduct(data)
//         })
//     }, [])

//     return (
//         <div>
//             {
//                 product.map((pro)=>(
//                     pro[id].product_name
//                 ))
//             }
//         </div>
//     )
// }

// export default SingleProduct


import react from "react";
import product from '../data'

function Singleproduct(){
const{productId}=useParams();
const product=product.find((product)=>product.id===productId);
return(
<section className="section product">
<img src={image} alt={shop.title}/>
<h3>{shop.title}</h3>
<p>Unit Price:Ksh{shop.price}</p>
<button>Add to Cart</button>
<Link to='/products'>back to products</Link>
</section>
);
};

export function Singleproduct()
