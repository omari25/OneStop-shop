import React from 'react';
import FeaturedTitle from './FeaturedTitle'; 
import ProductCard from './ProductCard';


function ProductList({ heading, data }) {
  return (
    <div className="xl:px-0 px-2">
      <div className="flex justify-between items-center py-5">
        <FeaturedTitle text={heading} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((product) => {
          return <ProductCard key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;