import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menu from "../assets/bar.png"

function Navbar() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    isActive ? setActive(false) : setActive(true);
    if (window.innerWidth > 768) {
      setActive(true);
    }
  }

  return (
    <div className={`nav bg-[#EBEAED] overflow-hidden text-xl flex items-center justify-between font-athletics px-[5%] sm:px-[7.5%] md:px-[10%] py-8 md:py-12 ${isActive ? "overflow-x-hidden" : ""}`}>
      <NavLink className="text-[#1D2939] flex items-center" to="/"><div className='w-3 h-3 bg-gray-400 rounded-full mr-1'></div>blurryface</NavLink>
      <div className={`sm:hidden ${isActive ? "transition-all z-[10] absolute bottom-0 left-0 flex h-[80vh] w-screen bg-black/50" : ""}`}></div>
      <nav className={`text-[#272727]/75 text-lg font-medium sm:space-x-6 transition-all ${isActive ? "bg-[#EBEAED] sm:bg-transparent flex flex-col sm:flex-row justify-center fixed sm:relative space-x-0 w-screen sm:w-fit text-center left-0 sm:left-[unset] top-20 sm:top-[unset] space-y-4 sm:space-y-0 h-48 sm:h-fit z-10 overflow-x-hidden" : "fixed -top-24 sm:relative sm:top-0"}`}>
        <NavLink onClick={() => handleClick()} to="/">ABOUT</NavLink>
        <a onClick={() => handleClick()} href="#work">WORK</a>
        <a href="https://drive.google.com/file/d/1WYtvZb_a8wa-sk9EG2-WyOBkxm02kYdv/view?usp=drivesdk " target='_blank'>RESUME</a>
      </nav>
      <img onClick={() => handleClick()} className='w-7 sm:hidden' src={menu} alt="" />
    </div>
  )
}

export default Navbar