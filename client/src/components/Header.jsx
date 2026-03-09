import React, {useState} from 'react'
import { HashLink } from "react-router-hash-link";
import logo from '../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className='flex fixed justify-between items-center md:p-3 p-3 z-100 w-full bg-black/20 backdrop-blur-md border-b border-white/20 text-white'>
        <div className='flex h-4 items-center'>
          <img src={logo} className='h-12' />
          <p className='mx-2 font-bold font-sans leading-4 text-xl'>DIOCESAN<span className='text-red-500'>S</span> <br /><span className='text-[#fbc647] text-[12px] font-medium'>ROBE MAKERS</span></p>
        </div>
        
        <div className="md:hidden">
          <button
            className="text-black text-[30px] z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "x" : "☰"}
          </button>
        </div>

        <ul className='hidden md:flex gap-20 py-3'>
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#products">Products</HashLink></li>
            <li><HashLink smooth to="/#gallery">Gallery</HashLink></li>
            <li><HashLink smooth to="/#review">Craftmanship</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
           
        </ul>

              <ul
          className={`
            md:hidden
            fixed top-17 right-0 h-full w-full bg-black text-white p-10
            flex flex-col gap-10 items-center text-[20px] font-semibold
            opacity-85 transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            z-50
          `}
        >
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#products">Products</HashLink></li>
            <li><HashLink smooth to="/#gallery">Gallery</HashLink></li>
            <li><HashLink smooth to="/#review">Craftmanship</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
        </ul>
        
      </nav>
    </>
  )
}

export default Header
