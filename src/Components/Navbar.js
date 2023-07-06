import React from 'react';
import img from '../img/logoWhite.png';
import { BiMenu } from 'react-icons/bi';
const Navbar = () => {
  return (
    <>
      <div className='shadow-md flex h-16 py-3 px-8 shadow-black'>
        {/* logo */}
        <div className='md:w-[20%] flex '>
          <img className='my-auto' src={img} alt='' />{' '}
        </div>
        {/* searchbar */}
        <div className='w-[25%] text-sm  align-middle rounded-full px-5  hidden md:flex  '>
          <input
            className='bg-transparent focus:outline-none w-full h-full text-gray-400 '
            type='text'
            placeholder='Search'
          />
        </div>

        {/* Navigations */}
        <ul className='w-[35%]  gap-12 justify-center my-auto text-white hidden xl:flex'>
          <li>Location</li>
          <li>Services</li>
          <li>My Booking</li>
        </ul>
        {/* Buttons */}
        <div className='min-w-[25%] xl:flex hidden  '>
          <div className='mx-auto right-0 ml-auto flex gap-3'>
            <button className='bg-[#ACF32D] text-white text-sm px-8 py-2 rounded-lg my-auto'>
              Login/Register
            </button>
            <button className='border border-gray-300 text-gray-300 px-5 py-2 my-auto rounded-lg text-sm '>
              join Now
            </button>
          </div>
        </div>
        <div className='right-0 ml-auto xl:hidden flex'>
          <BiMenu size={30} className='text-white my-auto cursor-pointer ' />
        </div>
      </div>
      {/* ToggleMenu */}
      <div></div>
    </>
  );
};

export default Navbar;
