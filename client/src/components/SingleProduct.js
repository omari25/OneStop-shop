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