import React from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";


function ProductCard({ item }) {
  const { image_url, product_name, description, price } = item;

  const renderProductName = (product_name) => {
    return product_name.length > 80 ? product_name.substr(0, 80).trim() + "..." : product_name;
  };

  const renderDescription = (description) => {
    return description.length > 100 ? description.substr(0, 100).trim() + "..." : description;
  };

  return (
    <div className="flex flex-col justify-between cursor-pointer">
      <div className="aspect-w-1 aspect-h-1">
        <img src={image_url} alt="product" />
      </div>
      <h1 className="font-semibold">{renderProductName(product_name)}</h1>
      <p className="text-xs text-gray-500">{renderDescription(description)}</p>
      <p className="font-semibold text-gray-700">$ {price}</p>
      <div className="flex justify-between items-center">
        <MdOutlineAddShoppingCart className="bg-gray-800 rounded-full text-white p-1 w-8 h-8" />
        <AiOutlineHeart className="bg-gray-800 rounded-full text-white p-1 w-8 h-8" />
        <button className="bg-gray-800 text-white px-2 rounded py-1">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;