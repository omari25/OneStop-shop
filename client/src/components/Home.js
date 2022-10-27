import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Slider from './Slider';

function Home(){
  const [electronics, setElectronics] = useState([])
  const [food, setFood] = useState([])

  useEffect(() => {
    fetch('categories/1')
    .then(response => response.json())
    .then((data) => {
      setElectronics(data.products)
    })
  }, [])

  useEffect(() => {
    fetch('categories/2')
    .then(response => response.json())
    .then((data) => {
      setFood(data.products)
    })
  }, [])

  const newElectronics = electronics.slice(1, 7)
  const newFood = food.slice(0, 6)

  return (
    <div className="w-full ">
      {/* <Slider /> */}
      <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
        {newElectronics.map((electronic)=>(
            <Link to={`/products/${electronic.id}`} key={electronic.id} className="w-[200px] p-2 shadow-xl mb-4">
              <img className="w-full" src={electronic.image_url} alt="" />
              <p className="font-bold mb-2">{electronic.product_name}</p>
              <p>{`Ksh: ${electronic.price}`}</p>
            </Link>
        ))}
      </div>

      <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
        {newFood.map((food)=>(
            <Link to={`/products/${food.id}`} key={food.id} className="w-[200px] p-2 shadow-xl mb-4">
              <img className="w-full" src={food.image_url} alt="" />
              <p  className="font-bold mb-2">{food.product_name}</p>
              <p>{`Ksh: ${food.price}`}</p>
            </Link>
        ))}
      </div>

      {/* <img className="mx-8 mt-8 rounded-md" src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=1380&t=st=1666600766~exp=1666601366~hmac=fcde90b5347db30e1d9353087909bef7a1128fd62740b2ec6d2cdd3cf04ff6fb" alt=""/> */}

      
      {/* <img className="w-full rounded-md" src="https://cdni.iconscout.com/illustration/premium/thumb/summer-sale-banner-1472162-1246176.png" alt=""/> */}
        
    </div>
  );
}

export default Home;