import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {
  return (
    <div className='h-20 border-b-2 border-b-gray-400 text-lg font-semibold flex justify-evenly items-center p-5'>
     <Link to="/" className='text-2xl font-semibold'>Image Gallery</Link>
      <input type='text' className='border-2 border-gray-500  w-[400px] rounded-md p-1' placeholder='Search'/>
      <Link to="/" className='hidden md:block'>Home</Link>
      <Link to="/explore" className='hidden md:block'>Explore</Link>
      <Link to="/collection" className='hidden md:block'>Collection</Link>
      <Link to="/community" className='hidden md:block'>Community</Link>
      <DarkModeToggle/>
    </div>
  )
}

export default Navbar
