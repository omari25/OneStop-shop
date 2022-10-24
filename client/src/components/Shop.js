import React, { useEffect, useState } from "react";

function Shop() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.message);
      });
  }, []);
  return (
    <div>
      <img width={500} src={data} />
      
    </div>
  );
}

export default Shop;