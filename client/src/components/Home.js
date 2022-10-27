import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import FeaturedTitle from './FeaturedTitle';
// import ProductList from './ProductList';
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
            console.log(data.products)
            })
        }, [])

        const newFoodStuffs = foodStuffs.slice(0, 6)

      

      useEffect(() => {
          fetch('categories/1')
          .then(response => response.json())
          .then((data) => {
          setElectronics(data.products)
          console.log(data.products)
          })
      }, [])

        const newElectronics = electronics.slice(0, 6)
    
      
        useEffect(() => {
          fetch('categories/3')
          .then(response => response.json())
          .then((data) => {
          setFashion(data.products)
          console.log(data.products)
          })
      }, [])

        const newFashion = fashion.slice(0, 6)


        useEffect(() => {
          fetch('categories/4')
          .then(response => response.json())
          .then((data) => {
          setBooks(data.products)
          console.log(data.products)
          })
      }, [])

        const newBooks = books.slice(6, 11)
       


        useEffect(() => {
          fetch('categories/5')
          .then(response => response.json())
          .then((data) => {
          setHealth(data.products)
          console.log(data.products)
          })
      }, [])

        const newHealth = health.slice(8, 14)
        



 
  return (
    
   <>
   
    <div className="w-full">
    <Slider />
      <FeaturedTitle className=" py-10" text= "Shop by Category" />

    
      <div className='flex w-full flex-wrap gap-4 justify-center mb-8 '>
        {newElectronics.map((electronics)=>(
            <Link to={`/products/${electronics.id}`} key={electronics.id} className="w-[220px] border-2 gap-[4]]">
              <img src={electronics.image_url} alt="product" />
               <p className='text-center'>{electronics.product_name}</p>
               <p className='text-center font-semibold'>Ksh {electronics.price}</p>
             </Link>
        ))}
      </div>
    
        
     <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
        {newFoodStuffs.map((foodStuffs)=>(
            <Link to={`/products/${foodStuffs.id}`} key={foodStuffs.id} className="w-[220px] border-2 gap-[4]]">
              <img src={foodStuffs.image_url} alt="" />
              <p className='text-center'>{foodStuffs.product_name}</p>
              <p className='text-center font-semibold'> Ksh {foodStuffs.price}</p>
            </Link>
        ))}
      </div>

      <div className='flex'>
        <img className="mx-8 mt-8 rounded-md shadow-2xl w-full h-96 " 
        src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=1380&t=st=1666600766~exp=1666601366~hmac=fcde90b5347db30e1d9353087909bef7a1128fd62740b2ec6d2cdd3cf04ff6fb" alt=""/> 
      </div>

      <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
        {newFashion.map((fashion)=>(
            <Link to={`/products/${fashion.id}`} key={fashion.id} className="w-[220px] border-2 gap-[4]]">
              <img src={fashion.image_url} alt="" />
              <p className='text-center'>{fashion.product_name}</p>
              <p className='text-center font-semibold'>Ksh {fashion.price}</p>
            </Link>
        ))}
      </div>

      <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
        {newBooks.map((books)=>(
            <Link to={`/products/${books.id}`} key={books.id} className="w-[220px] border-2 gap-[4]]">
              <img src={books.image_url} alt="" />
              <p className='text-center'>{books.product_name}</p>
              <p className=' text-center font-semibold'> Ksh {books.price}</p>
            </Link>
        ))}
      </div>

      
      <div className='flex w-full flex-wrap gap-4 justify-center mb-8'>
        {newHealth.map((health)=>(
            <Link to={`/products/${health.id}`} key={health.id} className="w-[220px] border-2 gap-[4]]">
              <img src={health.image_url} alt="" />
              <p className='text-center'>{health.product_name}</p>
              <p className='text-center font-semibold'>Ksh {health.price}</p>
            </Link>
        ))}
      </div>

     </div >   

     <Footer />  
   
   </>
  );
  }

export default Home;

  


  {/* <ProductList heading="Electronics" data={newElectronics} />
      <ProductList heading="Food Stuffs" data={newFoodStuffs} />
      <ProductList heading="Fashion" data={fashion} />
      <ProductList heading="Books" data={books} />
      <ProductList heading="Health" data={health} /> */}



    {/* <div>
      <h2 className="text-2xl font-medium pt-40">Sporting Goods </h2>

      <div className="sports-images-div flex flex-row justify-center items-center px-4 py-4  h-60">
        {sportsdata.map((item) => (
          <div key={item.id} className="one item div w-80 h-50">
            <img classname="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
       
          </div>
        ))}
      </div>
    </div>

    <img className="w-5/6 rounded-md " src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=1380&t=st=1666600766~exp=1666601366~hmac=fcde90b5347db30e1d9353087909bef7a1128fd62740b2ec6d2cdd3cf04ff6fb" alt=""/>

  

    <div>
      <h2 className="text-2xl font-medium pt-40">Food Stuff </h2>

      <div className="food-images-div flex flex-row justify-center items-center px-4 py-4  h-60">
        {fooddata.map((item) => (
          <div key={item.id} className="one item div w-80 h-50">
            <img classname="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
       
          </div>
        ))}
      </div>
    </div> */}
      
  
  












/* <div>
      <div className='bg-white '>
        <img className='' src='https://cdni.iconscout.com/illustration/premium/thumb/summer-sale-banner-1472162-1246176.png' alt=""/>
      </div>
      <div>Categories
        <h2 className='text-left'>Fashion</h2>
        <div className=''>
          <img 
          className="justify-start box-border h-54" 
          src='https://broffice.org/wp-content/uploads/2020/08/92a97d6f91f63a6b1a6cea1ff40918e7.jpg' alt=''/>
        </div>
        <h2>Sporting Goods</h2>
      </div>
      <div>Sale</div>
      <div>
        <h2>Electronics</h2>
        <h2>Food Stuff</h2>
      </div>
    </div> */
    

    // https://static.wixstatic.com/media/6f98b7_d342cc168c024da584ac607e3d17a26b~mv2.jpg/v1/fill/w_1514,h_458,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6f98b7_d342cc168c024da584ac607e3d17a26b~mv2.jpg