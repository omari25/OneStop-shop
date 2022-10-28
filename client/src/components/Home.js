// import React, { useEffect, useState } from 'react';
import data from '../data';
import electronicsdata from '../electronicsdata';
import fooddata from '../fooddata';
import sportsdata from '../sportsdata';
// import { useNavigate } from 'react-router-dom';

function Home( {category, setCategory} ){
  // const [items, setItems] = useState([])

  // const navigate = useNavigate();

  // function handleCategory() {
  //   fetch('/products', { method: 'GET' }).then ((r) => {
  //     if (r.ok) {
  //       setCategory(null);
  //       navigate('/categories');
  //     }
  //   });
  // }

  // useEffect(() => {
  //   fetch('categories')
  //   .then(response => response.json())
  //   .then((data) => {
  //     setItems(data)
  //   })
  // }, [])

  return (
    
    
  <div className="w-full ">

    <img className="w-full rounded-md" src="https://cdni.iconscout.com/illustration/premium/thumb/summer-sale-banner-1472162-1246176.png" alt=""/>
    
    <div className='py-6'>
      <h2 className="text-2xl font-medium" >Fashion </h2>
      <div className="flex flex-row justify-between w-full">
        {data.map((item) => (
          <div key={item.id} className="w-[200px]">
            <img className="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </div>

    <div className='py-6'>
      <h2 className="text-2xl font-medium" >Sporting goods </h2>
      <div className="flex flex-row justify-between w-full">
        {sportsdata.map((item) => (
          <div key={item.id} className="w-[200px]">
            <img className="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </div>

    <img className="w-full rounded-md" src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=1380&t=st=1666600766~exp=1666601366~hmac=fcde90b5347db30e1d9353087909bef7a1128fd62740b2ec6d2cdd3cf04ff6fb" alt=""/>

    <div className='py-6'>
      <h2 className="text-2xl font-medium" >Electronics </h2>
      <div className="flex flex-row justify-between w-full">
        {electronicsdata.map((item) => (
          <div key={item.id} className="w-[200px]">
            <img className="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </div>

    <div className='py-6'>
      <h2 className="text-2xl font-medium" >Food stufss </h2>
      <div className="flex flex-row justify-between w-full">
        {fooddata.map((item) => (
          <div key={item.id} className="w-[200px]">
            <img className="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
      
  </div>
  );
}

export default Home;