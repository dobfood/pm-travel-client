import Logo from '~/assets/Logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='bg-gradient-to-t from-[#ffffff] to-[#e6f2ff]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link to='/'>
                <img className='h-8 w-auto' src={Logo} alt='Logo' />
                <span className='text-black font-bold ml-2'>PM-TRAVEL</span>
              </Link>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link
                  to='/'
                  className='text-gray-400 hover:bg-[#bbdefa] hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </Link>
                <Link
                  to='/about'
                  className='text-gray-400 hover:bg-[#bbdefb] hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  About
                </Link>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:bg-[#b3e5fb] hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={handleToggle}
              className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <FaTimes className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <FaBars className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
          <div className='hidden sm:flex items-center justify-end ml-auto'>
            <Link
              to='/login'
              className='ml-4 p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='ml-1'>Đăng nhập</span>
            </Link>
            <Link
              to='/register'
              className='"bg-[#a6c1ee] text-black px-5 py-2 rounded-full hover:bg-[#87acec]'
            >
              <span className='ml-1'>Đăng ký</span>
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              to='/'
              className='text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Contact
            </Link>
            <hr className='my-2 border-gray-700' />
            <Link
              to='/login'
              className='text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Đăng nhập
            </Link>
            <Link
              to='/register'
              className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Đăng ký
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
