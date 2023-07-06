import React from 'react';
import { BiSolidMoon } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';
import {
  AiFillLock,
  AiFillHeart,
  AiFillQuestionCircle,
  AiOutlineFileProtect,
  AiFillStar,
} from 'react-icons/ai';
import { TbWorld, TbAlignBoxCenterMiddleFilled } from 'react-icons/tb';
import { HiMapPin, HiInformationCircle } from 'react-icons/hi2';
import { GoLaw } from 'react-icons/go';

const SideBar = () => {
  return (
    <div className='text-white mt-[150px] '>
      {/*Profile */}
      <div className='flex text-center'>
        <div className='mx-auto  '>
          <img
            className='h-20 w-20 mx-auto  rounded-full'
            src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
            alt=''
          />
          <h1 className='text-lg'>Saul Armstrong </h1>
          <div className='mx-auto mt-3'>
            <button className='bg-[#ACF32D] px-12 rounded-lg py-2 mx-auto'>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      {/* Pages */}
      <div>
        <div className='bg-gray-900 px-6 py-2 my-3'>General</div>
        <ul>
          <li className='flex my-3 text-sm'>
            <BiSolidMoon className='my-auto mr-2' />
            <p>Dark Mode</p>
            <input
              className="mr-2 mt-[0.3rem] ml-auto h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[#ACF32D] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
            />
            <label
              class='inline-block pl-[0.15rem] hover:cursor-pointer'
              for='flexSwitchCheckDefault'
            ></label>
          </li>
          <li className='flex my-3 text-sm'>
            <AiFillLock className='my-auto mr-2' />
            <p>Help Center</p>
            <MdArrowForwardIos className='my-auto  ml-auto' />
          </li>
          <li className='flex my-3 text-sm'>
            <TbWorld className='my-auto mr-2' />
            <p>App Language</p>
            <MdArrowForwardIos className='my-auto  ml-auto' />
          </li>
          <li className='flex my-3 text-sm'>
            <AiFillHeart className='my-auto mr-2' />
            <p>Favourite Service</p>
            <MdArrowForwardIos className='my-auto  ml-auto' />
          </li>
          <li className='flex my-3 text-sm'>
            <HiMapPin className='my-auto mr-2' />
            <p>Address</p>
            <MdArrowForwardIos className='my-auto  ml-auto' />
          </li>
          <li className='flex my-3 text-sm'>
            <AiFillQuestionCircle className='my-auto mr-2' />
            <p>Support & Live Chat</p>
            <MdArrowForwardIos className='my-auto  ml-auto' />
          </li>
        </ul>
        <div className='bg-gray-900 px-6 py-2 my-3'>About App</div>
        <ul>
          <li className='flex my-3 text-sm'>
            <AiOutlineFileProtect className='my-auto mr-2' />
            <p>Privacy Policy</p>
          </li>
          <li className='flex my-3 text-sm'>
            <TbAlignBoxCenterMiddleFilled className='my-auto mr-2' />
            <p>Terms & condition</p>
          </li>
          <li className='flex my-3 text-sm'>
            <GoLaw className='my-auto mr-2' />
            <p>Legal Notices</p>
          </li>
          <li className='flex my-3 text-sm'>
            <HiInformationCircle className='my-auto mr-2' />
            <p>About</p>
          </li>
          <li className='flex my-3 text-sm'>
            <AiFillStar className='my-auto mr-2' />
            <p>Rate Us</p>
          </li>
        </ul>
      </div>
      <div className='p-2'>
        <button className='uppercase bg-[#ACF132] w-full py-2 rounded-lg'>
          Logout{' '}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
