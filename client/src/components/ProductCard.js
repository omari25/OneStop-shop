import React from 'react';


function ProductCard({ item }) {
  const { image_url, product_name, description, price } = item;

  const renderProductName = (product_name) => {
    return product_name.length > 80 ? product_name.substr(0, 80).trim() + "..." : product_name;
  };

  const renderDescription = (description) => {
    return description.length > 100 ? description.substr(0, 100).trim() + "..." : description;
  };

  return (
    
    <div className="flex flex-col justify-between cursor-pointer w-full">
      <div className="aspect-w-1 aspect-h-1">
        <img src={image_url} alt="product" />
      </div>
        <h1 className="font-semibold">{renderProductName(product_name)}</h1>
        <p className="text-m text-gray-500">{renderDescription(description)}</p>
        <p className="font-semibold text-gray-700"> {price}</p>
        <div className="flex justify-between items-center ">
      </div>
    </div>
  );
}

export default ProductCard;