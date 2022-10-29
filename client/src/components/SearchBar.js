import { Link } from "react-router-dom";

function SearchBar({results}) {

    return (
      <div className="px-10">
        <p className="mb-4">Search Results</p>
        <div className="flex w-full flex-wrap gap-4">
          {results&&results?.map((result) => (
              <Link to={`/products/${result.id}`} key={result.id} className="w-[250px] p-2 shadow-xl mb-4">
                <img src={result.image_url} alt="" className="w-full"/>
                <p className="font-bold mb-2">{result.product_name}</p>
                <p>ksh: {result.price}</p>
              </Link>
            ))}
        </div>
      </div>
      );
   }

export default SearchBar