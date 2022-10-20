import React from 'react'
import imageabout from '../images/imageabout.png';

function AboutUs() {
  return (
    <div className='w-full bg-white text-center bg-no-repeat bg-center h-500
    '>
       <div className='w-full bg-white text-center bg-no-repeat bg-center h-50 w-70
    '> 
      <h1 className='text-2xl font-bold text-black bg-center'>About Us</h1>
      <br/>
        <img src={imageabout} height={10} width={2000} />  
    </div>
      <br/>
      
      <p class="text-black text-bold, center"></p>
      <br />
      <p class="text-black">
      <h1 className='text-xl font-bold text-black'>Shop-It</h1>
      We are the best online shopping center, 
      with all the good and amazing products 
      you need with just 
       a click of a button. 
       Make sure to share and subscribe  on
      all our social media pages
      Get  more Today!!
      </p>
      
      <br />
      
      <p class="text-black">
      <h1 className='text-xl font-bold text-black'>Mission</h1>
      We help people achieve independence <br />by making it easier to start,<br/>
      run, and grow <br />a business by connecting clients to vendors online.


      </p>
      
      <br />
      
      <p class="text-black">
      <h1 className='text-xl font-bold text-black'>Vision</h1>
      To be the leading online shopping center in Africa 
      and beyond
      </p>
    
      <br />
     
      <p class="text-black text-center">
      <h1 className='text-xl font-bold text-black'>Our Values</h1>
      Loyalty<br />Honesty<br />Trust<br />Ingenuity<br />Accountability<br />
      Simplicity,Respect And Value-centricity
      </p>
    </div>
  )
}

export default AboutUs;