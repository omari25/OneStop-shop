import React from 'react'
import Footer from './Footer';
import image from "./images/imageabout.png"

function AboutUs() {
  return (
    <div>

      <div className='w-full'>
        <img src={image}  alt="" className='w-full'/> 
      </div>

      <div className='mt-8 bg-slate-200 flex flex-col items-center'>
        <div className='w-[50%] my-8 px-10 py-4 rounded border border-black'>
          <h1 className='text-2xl font-bold text-center mb-4'>Shop-It</h1>
          <p>We are the best online shopping center, with all the good and amazing products you need with just a click of a button. Make sure to share and subscribe on all our social media pages Get  more Today!! </p>
        </div>
        <div className='w-[50%] mb-8 px-10 py-4 rounded border border-black'>
          <h1 className='text-2xl font-bold text-center mb-4'>Mission</h1>
          <p>We help people achieve independence by making it easier to start, run, and grow a business by connecting clients to vendors online.</p>
        </div>
        <div className='w-[50%] mb-8 px-10 py-4 rounded border border-black'>
          <h1 className='text-2xl font-bold text-center mb-4'>Vision</h1>
          <p className='text-center'>To be the leading online shopping center in Africa and beyond</p>
        </div>
        <div className='w-[50%] mb-8 px-10 py-4 rounded border border-black'>
          <h1 className='text-2xl font-bold text-center mb-4'>Our Values</h1>
          <p>Loyalty, Honesty, Trust Ingenuity,Accountability Simplicity Respect And Value-centricity </p>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default AboutUs;