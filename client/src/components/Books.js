import { useEffect, useState } from "react"

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
        <div className="flex w-full flex-wrap gap-4 justify-center">
            {items.map((item) =>(
                <div key={item.id} className="w-[250px] border-2">
                    <img src={item.image_url} alt="" className="w-full"/>
                    <p>{item.product_name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Books