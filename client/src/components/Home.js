import React from 'react';
import data from '../data';
import electronicsdata from '../electronicsdata';
import fooddata from '../fooddata';
import sportsdata from '../sportsdata';

function Home(){
  return (
  <div className="w-2/4 pt-40 ml-80">
    <img className="w-5/6 rounded-md" src="https://cdni.iconscout.com/illustration/premium/thumb/summer-sale-banner-1472162-1246176.png" alt=""/>

    <div>
      <h2 className="text-2xl font-medium pt-40">Fashion </h2>

      <div className="fashion-images-div flex flex-row justify-center items-center px-4 py-4  h-60">
        {data.map((item) => (
          <div key={item.id} className="one item div w-80 h-50">
            <img classname="rounded-md" src={item.img} alt=""/>
            <p className="font-light">{item.name}</p>
            <p className="font-medium">{item.price}</p>
       
          </div>
        ))}
      </div>
    </div>

    <div>
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

    <img className="w-5/6 rounded-md " src="image.png" alt=""/>

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
    </div>
      
  </div>
  );
}

export default Home;













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