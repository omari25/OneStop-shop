import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import data from '../data';
import Slider from './Slider';
import FeaturedTitle from './FeaturedTitle';
import ProductList from './ProductList';
// import electronicsdata from '../electronicsdata';
// import fooddata from '../fooddata';
// import sportsdata from '../sportsdata';
// import { useNavigate } from 'react-router-dom';


function Home( ){
  const [electronics, setElectronics] = useState([]);
  const [foodStuffs, setFoodStuffs] = useState([]);
  const [fashion, setFashion] = useState([]);
  const [books, setBooks] = useState([]);
  const [health, setHealth] = useState([]);
  // const [phones, setPhones] = useState([])
  // const [sportingGoods, setSportingGoods] = useState([])
  // const [babyProducts, setbabyProducts] = useState([])

  // const fetchCategories = async () => {
  
    // const { data } = await axios.get("/category/2");
    // const  foodStuffs   = data.products;
    // // setElectronics(electronics);
    // setFoodStuffs(foodStuffs);
    // // setFashion(fashion);
    // // setBooks(books);
    // // setHealth(health);
    //  console.log(foodStuffs)

  // };

  // function handleCategory() {
  //   fetch('/products', { method: 'GET' }).then ((r) => {
  //     if (r.ok) {
  //       setCategory(null);
  //       navigate('/categories');
  //     }
  //   });
  // }

  // useEffect(() => {
  //   fetchCategories();
   
  // }, []);

  useEffect(() => {
            fetch('categories/2')
            .then(response => response.json())
            .then((data) => {
            setFoodStuffs(data.products)
            console.log(data.products)
            })
        }, [])

        const newFoodStuffs = foodStuffs.slice(0, 6)
        console.log(newFoodStuffs)

  return (
    
   <>
   <Slider />
    <div className="xl:px-0 px-2">
      {/* <img className="w-5/6 rounded-md" src="https://cdni.iconscout.com/illustration/premium/thumb/summer-sale-banner-1472162-1246176.png" alt=""/> */}

      
      
      <FeaturedTitle className=" py-3" text= "Shop by Category" />

        <div className="flex flex-row justify-between items-center px-4 py-4  h-60">
        <div className="sm:w-2/4">
            <div className=" w-full aspect-auto aspect-h-9  rounded-md ">
              <img 
              src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg?w=1380&t=st=1666600766~exp=1666601366~hmac=fcde90b5347db30e1d9353087909bef7a1128fd62740b2ec6d2cdd3cf04ff6fb" alt="" />
            </div>
          </div>
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <ProductList heading="Electronics" data={electronics} />
      <ProductList heading="Food Stuffs" data={newFoodStuffs} />
      <ProductList heading="Fashion" data={fashion} />
      <ProductList heading="Books" data={books} />
      <ProductList heading="Health" data={health} />
            
   
   </>
  );
  }

export default Home;

  

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
      <h2 className="text-2xl font-medium pt-40">Electronics </h2>

      <div className="electronics-images-div flex flex-row justify-center items-center px-4 py-4  h-60">
        {electronicsdata.map((item) => (
          <div key={item.id} className="one item div w-80 h-50">
            <img classname="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
       
          </div>
        ))}
      </div>
    </div>

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