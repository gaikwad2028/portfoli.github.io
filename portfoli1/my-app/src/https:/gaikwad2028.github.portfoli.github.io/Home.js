import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
export default function Home() {
  
 
  

  return (
    <div className='intro'   >
      <div className='intro-2'  data-aos="zoom-out-up" >
      <div className='my-intro'>
         <h1 className="main">Hello, I AM </h1>
         <div className='dev-1'><p className='dev'>AKASH</p></div>
      </div>
      <p className="HH">I,am learning Front-end Development Javascript, Css ,Reactjs,Next-js,Figma</p>
      </div>
      <div className='follow' data-aos="fade-up"
     data-aos-duration="3000"><a href='https://www.linkedin.com/in/gaikwad-akash-4a9b7120a/' className='linkdin'><FaLinkedin size="md" className='linkdin-2'  /></a><a href='https://www.instagram.com/akash_gaikwad2010/' className='linkdin'><FaInstagram  className='linkdin-2'  size="md" /></a></div>
    </div>
  )
}