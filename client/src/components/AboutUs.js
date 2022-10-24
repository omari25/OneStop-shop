import React from 'react'
//import imageabout from '../import '

function AboutUs() {
  return (
    <div className=' bg-white
        text-center  bg-center h-500 
    '>
    <div className=' bg-white
        text-center  bg-center h-50 w-70 
    '> 
      <h1 className='text-2xl font-bold text-black bg-center'>About Us</h1>
        <br/>
        <img src={'./images/imageabout.png'}  alt={" loading"}/>  
    </div>
      <br/>
      <div className=' bg-slate-200
        text-center  bg-center  
    '> 
      <hr/>
      <p class="text-black text-bold, center"></p>
      <br />
      <p class="text-black">
      <h1 className='text-xl font-bold text-black'>Shop-It</h1>
      We are the best online shopping center,<br /> 
      with all the good and amazing products <br />
      you need with just <br />
       a click of a button. <br />
       Make sure to share and subscribe <br /> on
      all our social media pages
      Get  more Today!!
      </p>
      
      <br />
      </div>
      <div className=' bg-slate-200
        text-center  bg-center  
    '> 
      <p class="text-black">
      <h1 className='text-xl font-bold text-black'>Mission</h1>
      We help people achieve independence <br />by making it easier to start,<br/>
      run, and grow <br />a business by connecting clients to vendors online.


      </p>
      
      <br />
      </div>
      <div className=' bg-slate-200
        text-center  bg-center  
    '> 
      <p class="text-black">
      <h1 className='text-xl font-bold text-black'>Vision</h1>
      To be the leading online <br />shopping center <br />in Africa 
      and beyond
      </p>
    
      <br />
     </div>


     <div className=' bg-slate-200 text-center  bg-center  '> 
      <p class="text-black text-center">
      
      <h1 className='text-xl font-bold text-black'>Our Values</h1>
      Loyalty, Honesty, Trust<br />Ingenuity,Accountability<br />
      Simplicity Respect And Value-centricity
      </p>
      </div>
    </div>
  )
}

export default AboutUs;