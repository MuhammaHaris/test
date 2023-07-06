import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { CiMenuKebab } from 'react-icons/ci';
import bg from '../img/background.png';
const ChatBoard = () => {
  return (
    <div className=' my-5 flex p-1 text-white bg-gray-700 rounded-xl gap-1'>
      {/* Convercation */}
      <div className='w-[32%]'>
        {/* Search Bar */}
        <div className='bg-gray-950 px-2 py-3 rounded-xl'>
          <input
            className='bg-transparent focus:outline-none'
            type='text'
            placeholder='search'
          />
        </div>
        {/* Contact */}
        {/* Profile1 */}
        <div className='flex m-2 h-14 py-2 border-bottom'>
          <div className='w-14 h-10 '>
            <img
              className=' h-full w-full my-auto rounded-full '
              src='https://media.istockphoto.com/id/1400280368/photo/happy-businessman-working-on-his-laptop-at-home-handsome-businessman-reading-an-email-on-his.jpg?s=1024x1024&w=is&k=20&c=ZTqOMWzE84ZiCvGZ3R3_G4KS1Odnq9NbKzPV9Dp0q5Y='
              alt=''
            />
          </div>
          <div className='w-full ml-2'>
            <div className='flex  '>
              <h1 className='text-sm font-semibold '>Danial Adams</h1>
              <p className='ml-auto font-thin text-[8px] my-auto '>2:10 PM</p>
            </div>
            <p className=' text-[12px] h-5 overflow-hidden'>
              thank You so much for letting me know ...
            </p>
          </div>
        </div>
        {/* Next Profile */}
        <div className='flex m-2 h-14 py-2 border-bottom'>
          <div className='w-14 h-10 '>
            <img
              className=' h-full w-full my-auto rounded-full '
              src='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='w-full ml-2'>
            <div className='flex  '>
              <h1 className='text-sm font-semibold '>Joey Tribbiani</h1>
              <p className='ml-auto font-thin text-[8px] my-auto '>2:10 PM</p>
            </div>
            <p className=' text-[12px] h-5 overflow-hidden'>
              thank You so much for letting me know ...
            </p>
          </div>
        </div>
        {/* Next Profile */}
        <div className='flex m-2 h-14 py-2 border-bottom'>
          <div className='w-14 h-10 '>
            <img
              className=' h-full w-full my-auto rounded-full '
              src='https://plus.unsplash.com/premium_photo-1688350839154-1a131bccd78a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='w-full ml-2'>
            <div className='flex  '>
              <h1 className='text-sm font-semibold '>Monica Geller</h1>
              <p className='ml-auto font-thin text-[8px] my-auto '>2:10 PM</p>
            </div>
            <p className=' text-[12px] h-5 overflow-hidden'>
              thank You so much for letting me know ...
            </p>
          </div>
        </div>
        {/* Next Profile */}
        <div className='flex m-2 h-14 py-2 border-bottom'>
          <div className='w-14 h-10 '>
            <img
              className=' h-full w-full my-auto rounded-full '
              src='https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'
              alt=''
            />
          </div>
          <div className='w-full ml-2'>
            <div className='flex  '>
              <h1 className='text-sm font-semibold '>Phebe Buffey</h1>
              <p className='ml-auto font-thin text-[8px] my-auto '>2:10 PM</p>
            </div>
            <p className=' text-[12px] h-5 overflow-hidden'>
              thank You so much for letting me know ...
            </p>
          </div>
        </div>
        {/* Next Profile */}
        <div className='flex m-2 h-14 py-2 border-bottom'>
          <div className='w-14 h-10 '>
            <img
              className=' h-full w-full my-auto rounded-full '
              src='https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='w-full ml-2'>
            <div className='flex  '>
              <h1 className='text-sm font-semibold '>Rachel Green</h1>
              <p className='ml-auto font-thin text-[8px] my-auto '>2:10 PM</p>
            </div>
            <div className='flex '>
              <p className=' text-[12px] h-5 overflow-hidden w-[80%]'>
                thank You so much for letting me know ...
              </p>
              <p className=' my-auto text-[10px] text-black right-0 ml-auto bg-[#ACF32D] rounded-full px-1'>
                2
              </p>
            </div>
          </div>
        </div>
        {/* Next Profile */}
        <div className='flex m-2 h-14 py-2 border-bottom'>
          <div className='w-14 h-10 '>
            <img
              className=' h-full w-full my-auto rounded-full '
              src='https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className='w-full ml-2'>
            <div className='flex  '>
              <h1 className='text-sm font-semibold '>Chandler Bing</h1>
              <p className='ml-auto font-thin text-[8px] my-auto '>2:10 PM</p>
            </div>
            <p className=' text-[12px] h-5 overflow-hidden'>
              thank You so much for letting me know ...
            </p>
          </div>
        </div>
        {/* Next Profile */}
      </div>
      {/* Chatbox */}
      <div className='w-[68%] bg-gray-400 rounded-xl h-[850px]'>
        {/* Header */}

        <div className='bg-gray-950 h-12 rounded-t-xl flex px-5'>
          <div className='my-auto flex gap-1  w-full'>
            <MdArrowBackIos className='my-auto' />
            <h1 className='my-auto'>Danial Adams</h1>
            <CiMenuKebab className='my-auto ml-auto mr-3' />
          </div>
        </div>
        <div className='relative'>
          <div className='absolute h-full w-full flex'>
            <div className='  bottom-0 w-full mt-auto rounded-b-xl bg-gray-950 p-4 '>
              <input
                className='bg-transparent focus:outline-none'
                type='text'
                placeholder='Type your massage'
              />
            </div>
          </div>
          <div>
            <img className='h-[803px] rounded-b-xl w-full' src={bg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoard;
