import React from 'react'
import img from "./PngItem.png"

export default function About() {
  return (
    <div className="about-container" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className='fhfh'>
        <div className='my-img'>
          <img src={img} alt="human" className='human' />
        </div>
        <div className='About-me'>
          <h1 className='name'>About <p className='aim'>ME</p></h1>
          <p className='description'>The artistic design of Janis’s website is very captivating. It gives you a glimpse into the designer’s personal aesthetic style,<br /> while supplying the information you need to hire him for your next project.
            <br /> The use of large photography can leave a lasting impression on the visitor if done effectively, as shown in this About page.</p>
          <h1 className='name'> MY <p className='aim'>AIM</p></h1>
          <p className='description'>The artistic design of Janis’s website is very captivating. It gives you a glimpse into the designer’s personal aesthetic style, <br />while supplying the information you need to hire him for your next project.
            <br />The use of large photography can leave a lasting impression on the visitor if done effectively, as shown in this About page.</p>
          <h1 className='name'>SKI<p className='aim'>LLS</p></h1>
          <p className='description'>The artistic design of Janis’s website is very captivating. It gives you a glimpse into the designer’s personal aesthetic style,<br /> while supplying the information you need to hire him for your next project.
            <br />The use of large photography can leave a lasting impression on the visitor if done effectively, as shown in this About page.</p>
          <p className='thankyou'>Thank you  for reading this.........</p>
        </div>
      </div>
    </div>
  )
}
