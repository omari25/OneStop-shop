import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Books(){

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/categories/4")
        .then(response => response.json())
        .then((data) => {
            setItems(data.products)
        })
    }, [])

    return (
        <div className="flex w-full flex-wrap gap-4 justify-center mb-8">
            {items.map((item) =>(
                <Link to={`/products/${item.id}`} key={item.id} className="w-[250px] p-2 shadow-xl mb-4">
                    <img src={item.image_url} alt="" className="w-full"/>
                    <p className="font-bold mb-2">{item.product_name}</p>
                    <p>{`Ksh: ${item.price}`}</p>
                </Link>
            ))}
        </div>
    )
}

export default Books