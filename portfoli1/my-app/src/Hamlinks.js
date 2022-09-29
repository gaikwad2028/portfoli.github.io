import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hamlinks() {
  return (
    <div className='hum'>
    <NavLink to='/' className="border-1">Home</NavLink >
     <NavLink  to='/about' className="border-1">About</NavLink >
     <NavLink to='/contact' className="border-1">Contact</NavLink >
     <NavLink to='/Project' className="border-1">project</NavLink >
    </div>
  )
}
