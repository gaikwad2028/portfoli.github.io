import React from 'react'
import pic from "./Vector 1.png"
import { NavLink } from 'react-router-dom'
import Hamlinks from './Hamlinks';
import { FaHamburger } from 'react-icons/fa';

export default function Navbar() {

const[Show,Setshow]=React.useState(false)

  const handelclick=()=>{
    Setshow(!Show)
  }
  console.log(Show)

  return (
    <div className='navbar'>
    <div className='content' >
    <NavLink to='/'><img src={pic} alt="kk" className='logo' /></NavLink>
     <NavLink to='/' className="border">Home</NavLink >
     <NavLink  to='/about' className="border">About</NavLink >
     <NavLink to='/Project' className="border">project</NavLink >
     <NavLink to='/contact' className="border">Contact</NavLink >
     <div className='ham'onClick={handelclick} ><FaHamburger className='burger'   /></div>
     </div>
    { Show && <Hamlinks ></Hamlinks>} 
    </div>
  
  )
    
}
