import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-[#EBEAED] text-xl flex items-center justify-between font-athletics px-[5%] sm:px-[7.5%] md:px-[10%] py-8 md:py-12'>
        <NavLink className="text-[#1D2939] flex items-center" to="/"><div className='w-3 h-3 bg-gray-400 rounded-full mr-1'></div>blurryface</NavLink>
        <nav className='text-[#272727]/75 text-lg font-medium space-x-6'>
            <NavLink to="/about">ABOUT</NavLink>
            <a href="#work">WORK</a>
            <a href="https://drive.google.com/file/d/1WYtvZb_a8wa-sk9EG2-WyOBkxm02kYdv/view?usp=drivesdk " target='_blank'>RESUME</a>
        </nav>
    </div>
  )
}

export default Navbar