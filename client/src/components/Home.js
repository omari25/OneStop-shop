import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Home( ){
  const [electronics, setElectronics] = useState([]);
  const [foodStuffs, setFoodStuffs] = useState([]);
  const [fashion, setFashion] = useState([]);
  const [books, setBooks] = useState([]);
  const [health, setHealth] = useState([]);

  useEffect(() => {
    fetch('categories/2')
    .then(response => response.json())
    .then((data) => {
    setFoodStuffs(data.products)
    })
  }, [])

  const newFoodStuffs = foodStuffs.slice(0, 6)

  useEffect(() => {
    fetch('categories/1')
    .then(response => response.json())
    .then((data) => {
    setElectronics(data.products)
    })
  }, [])

  const newElectronics = electronics.slice(0, 6)
      
  useEffect(() => {
    fetch('categories/3')
    .then(response => response.json())
    .then((data) => {
    setFashion(data.products)
    })
  }, [])

  const newFashion = fashion.slice(0, 6)

  useEffect(() => {
    fetch('categories/4')
    .then(response => response.json())
    .then((data) => {
    setBooks(data.products)
    })
  }, [])

  const newBooks = books.slice(6, 12)

  useEffect(() => {
    fetch('categories/5')
    .then(response => response.json())
    .then((data) => {
    setHealth(data.products)
    })
  }, [])

  const newHealth = health.slice(8, 14)

  return (
    <>
      <div className="w-full">
        <Slider />
        {/* <FeaturedTitle className=" py-10" text= "Shop by Category" /> */}

        <div className='flex w-full flex-wrap gap-4 justify-center mb-8 '>
          {newElectronics.map((electronics)=>(
              <Link to={`/products/${electronics.id}`} key={electronics.id} className="w-[220px] p-2 shadow-xl mb-4">
                <img src={electronics.image_url} alt="product" className='w-full'/>
                <p className='text-center font-bold mb-2'>{electronics.product_name}</p>
                <p className='text-center'>Ksh: {electronics.price}</p>
              </Link>
          ))}
        </div>
      
          
        <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
          {newFoodStuffs.map((foodStuffs)=>(
              <Link to={`/products/${foodStuffs.id}`} key={foodStuffs.id} className="w-[220px] shadow-xl mb-4">
                <img src={foodStuffs.image_url} alt="" className='w-full'/>
                <p className='text-center font-bold mb-2'>{foodStuffs.product_name}</p>
                <p className='text-center'> Ksh: {foodStuffs.price}</p>
              </Link>
          ))}
        </div>

        <img className="w-full h-80 px-6 mb-6" src="https://t3.ftcdn.net/jpg/04/45/16/96/360_F_445169635_V92LnhJXoMapMXuR4k9bVIu3lHZhDnWc.jpg" alt=""/> 

        <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
          {newFashion.map((fashion)=>(
              <Link to={`/products/${fashion.id}`} key={fashion.id} className="w-[220px] shadow-xl mb-4">
                <img src={fashion.image_url} alt="" className='w-full'/>
                <p className='text-center font-bold mb-2'>{fashion.product_name}</p>
                <p className='text-center'>Ksh: {fashion.price}</p>
              </Link>
          ))}
        </div>

        <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
          {newBooks.map((books)=>(
              <Link to={`/products/${books.id}`} key={books.id} className="w-[220px] shadow-xl mb-4">
                <img src={books.image_url} alt="" className='w-full'/>
                <p className='text-center font-bold mb-2'>{books.product_name}</p>
                <p className='text-center'> Ksh: {books.price}</p>
              </Link>
          ))}
        </div>

        <img className="w-full h-80 px-6 mb-6" src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=1380&t=st=1666600766~exp=1666601366~hmac=fcde90b5347db30e1d9353087909bef7a1128fd62740b2ec6d2cdd3cf04ff6fb" alt=""/> 
        
        <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
          {newHealth.map((health)=>(
              <Link to={`/products/${health.id}`} key={health.id} className="w-[220px] shadow-xl mb-4">
                <img src={health.image_url} alt="" className='w-full'/>
                <p className='text-center font-bold mb-2'>{health.product_name}</p>
                <p className='text-center'>Ksh {health.price}</p>
              </Link>
          ))}
        </div>

      </div >   

      <Footer />  
    </>
  );
}

export default Home;