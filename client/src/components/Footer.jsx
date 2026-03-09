import React from 'react';
import footer_logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import {Facebook, FacebookIcon, Instagram, LucideFacebook} from 'lucide-react';
const Footer = () => {
  return (
    <div className='bg-[#7b202e] text-black'>

    <nav className='md:flex justify-between items-center md:p-6.25 p-5'>
      <div className='md:block flex justify-between items-center md:gap-0 gap-10  md:mb-0 mb-8'>
                <div className='flex h-4 items-center'>
                  <img src={footer_logo} className="md:h-15 h-12 object-contain md:mb-5" />
                  <p className='mx-2 font-bold font-sans leading-4 text-2xl'>DIOCESAN<span className='text-red-500'>S</span> <br /><span className='text-[#fbc647] text-[12px] font-medium'>ROBE MAKERS</span></p>
                </div>
      <div className='md:w-[50%]'>
      <p className='text-[13px]'></p>
    </div>
    </div>

    <div className='flex flex-wrap md:gap-20 justify-between gap-15'>
      <ul>
      <p className='text-[18px] text-[#fbc647]'>Products</p>
      <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Custom Orders</NavLink>
        </li>

        <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Chasubles</NavLink>
        </li>

        <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Cassocks</NavLink>
        </li>

                <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Stoles</NavLink>
        </li>

        <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Albs</NavLink>
        </li>
    </ul>
    
    <ul>
      <p className='text-[18px] text-[#fbc647]'>Connect</p>
      <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>About Us</NavLink>
      </li>

      <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Testimonials</NavLink>
      </li>

      <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Privacy Policy</NavLink>
      </li>

      <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Gallery</NavLink>
      </li>

      <li className='my-2 text-[15px] text-[#fef3bd]'>
        <NavLink>Contact</NavLink>
      </li>
    </ul>

    </div>

    </nav>
    
    <div className='flex justify-between md:p-7 p-5 border-t bo border-t-gray-600'>
      <p>© El Sali 2025.</p>
      <div className='flex justify-between md:gap-5 gap-2'>
      <Instagram />
      <Facebook />
      </div>

    </div>
    </div>
  );
}

export default Footer;
