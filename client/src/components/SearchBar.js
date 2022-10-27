import React, { useEffect, useState } from "react";

function SearchBar({results}) {
    console.log(results)
//     const [searchInput, setSearchInput] = useState("")
//   // const [result, setResult] = useState([])
//   // const [searchKey, setSearchKey] = useState("")
  

//   const [data, setData] = useState([])
//   // const searchKeyWords = props.match.params.keywords

//   useEffect(() => {
//     fetch("/products")
//     .then(response => response.json())
//     .then((data) => {
//       setData(data)
//         console.log(data)
//         // console.log(items)
//     })
//     }, [])

//     const Search = data.filter(data=>data.product_name.toLowerCase().includes(searchInput))
//     console.log(Search)

    return (
      <div>
        <p>Search Result</p>
        <ul>
          {results&&results?.map((result) => (
              <li key={result.product_id}>
                {result.product_name}
                <img src={result.image_url} />
              </li>
            ))}
        </ul>
        
      </div>

      );
   }
   
   
   
   
   
   
export default SearchBar