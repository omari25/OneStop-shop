import React from 'react'
import {BsFacebook,BsYoutube} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full h-25 bg-black'>

      <div className='lg:w-3/5 w-11/12 m-auto p-5 flex justify-between'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-xl font-bold text-white'>Links</h1>
          <a className='text-xs text-white' href="/">Home</a>
          <a className='text-xs text-white' href="/">Shop</a>
          <a className='text-xs text-white' href="/">About</a>
          <a className='text-xs text-white' href="/">Contact</a>
        </div>

        <div className='flex flex-col space-y-1'>
          <h1 className='text-xl font-bold text-white'>Help</h1>
          <a className='text-xs text-white' href="/">Payment Options</a>
          <a className='text-xs text-white' href="/">Returns</a>
          <a className='text-xs text-white' href="/">Private Policies</a>
        </div>

        <div className='flex flex-col space-y-1'>
          <h1 className='text-xl font-bold color: text-white'>Newsletters</h1>
          <input className="required:border-red-500 ..." id="name" name="name" placeholder="Enter Your Email Address"  type="text"/>
          <a className='text-xs  text-white' href="/">Subscribe</a>
        </div>

        <div className='flex flex-col space-y-1'>
          <h1 className='text-xl font-bold text-white'>Socials</h1>
          <BsFacebook size={'2rem'} style={{color: "#FFF"}}/>
          {/* <BsYoutube size={'2rem'} style={{color: "#FFF"}}/> */}
          <AiFillInstagram size={'2rem'} style={{color: "#FFF"}}/>
          <AiFillTwitterCircle size={'2rem'} style={{color: "#FFF"}}/> 
        </div>
      </div>

      <div className='w-1/2 m-auto p-5 flex justify-center space-x-10 text-gray-700'>
        <h1 className='text-sl  text-white'>2022 Shop-It. All rights Reserved</h1>
      </div>

    </footer>
  )
}

export default Footer;