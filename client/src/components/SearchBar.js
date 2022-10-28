import React, { useEffect, useState } from "react";

function SearchBar({results}) {
    console.log(results)

    return (
        <div className="grid grid-cols-4 gap-4">
        <div className="flex w-full flex-wrap gap-4 justify-center ">
        <p>Search Results</p>
        <ul>
          {results&&results?.map((result) => (
              <div key={result.id} className="w-[250px] border-2">
                <img src={result.image_url} />
                <p>{result.product_name}</p>
                <p>{result.price}</p>
                </div>
            ))}
        </ul>
        
      </div>
      </div>
      );
   }
   
   
   
   
   
   
export default SearchBar