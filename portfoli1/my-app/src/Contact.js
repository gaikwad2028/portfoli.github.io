import React from 'react'
import letter from "./blue-envelope-icon-6.png"
export default function Contact() {
  return (
    <div className='contact'>
       <div className='contact-des-1' data-aos="zoom-in">
      <div className='contact-des'>
        <h1 className='tell-me'>Lets chat if you want to know more about myself</h1>
      </div>
      <div className='form-1'>
        <p className='na'>Name:</p><input type="text"className="chat" />
        <p className='na'>Email: </p><input type="text"className="chat" />
        <p className='na'>Contact no:</p><input type="text"className="chat" />
        <p className='na'>Message:</p><textarea className='message' />
        <div><button className='sub'data-aos="fade-left">Submit</button></div>
      </div>
    </div>
    <div className='fades'data-aos="fade-up-right" >
    <div className='fade' ><img src={letter} alt="letter"  className='let' /></div>
    </div>
    </div>
  )
}

