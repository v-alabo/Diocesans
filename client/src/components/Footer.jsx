import React from 'react';
import footer_logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import {Facebook, FacebookIcon, Instagram, LucideFacebook} from 'lucide-react';
const Footer = () => {
  return (
    <div className='bg-[#7b202e] text-black'>

    <nav className='md:flex justify-between items-center md:p-6.25 p-5'>
      <div className='md:block flex justify-between items-center md:gap-0 gap-10  md:mb-0 mb-8'>
      <img className="md:w-[20%] w-[25%] h-auto object-contain md:mb-5"  src={footer_logo} alt="" />
      <div className='md:w-[50%]'>
      <p className='text-[13px]'>A premier cleaning company providing top-tier services, professional expertise, and spotless results.</p>
    </div>
    </div>

    <div className='flex flex-wrap md:gap-20 justify-between gap-15'>
      <ul>
      <p className='text-[18px] text-gray-600'>Services</p>
      <li className='my-2 text-[15px]'>
        <NavLink>Residential Cleaning</NavLink>
        </li>

        <li className='my-2 text-[15px]'>
        <NavLink>Commercial Cleaning</NavLink>
        </li>

        <li className='my-2 text-[15px]'>
        <NavLink>Specialised Cleaning</NavLink>
        </li>

                <li className='my-2 text-[15px]'>
        <NavLink>Move-in/Move-out</NavLink>
        </li>
    </ul>

    <ul>
      <p className='text-[18px] text-gray-600'>Company</p>
      <li className='my-2 text-[15px]'>
        <NavLink>About</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Terms of Service</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Privacy Policy</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Disclaimer</NavLink>
      </li>
    </ul>

    <ul>
      <p className='text-[18px] text-gray-600'>Support</p>
      <li className='my-2 text-[15px]'>
        <NavLink>Help Center</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Contact Us</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>FAQ</NavLink>
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
