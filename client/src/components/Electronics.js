import { useEffect, useState } from "react"


function Electronics(){

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/categories/1")
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

export default Electronics



//   /* Links */
//   {heroes.map(hero => (<Link to={'heroes/' + hero.id} />)}

// <BrowserRouter>
//   /* Component */
//   <Route path="heroes/:id" component={Hero} />
// </BrowserRouter>

// class Hero extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.match.params.id}
//       </div>
//     );
//   }
// }