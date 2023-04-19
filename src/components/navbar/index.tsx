import Logo from '~/assets/Logo.png';
import React, { useState } from 'react';
import close from '~/assets/close.svg';
import menu from '~/assets/menu.svg';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const navItem = [
    { text: 'Trang chủ', link: '/home' },
    { text: 'Tour', link: '/tour' },
    { text: 'Về chúng tôi', link: '/about' },
    { text: 'Liên hệ', link: '/contact' }
  ];
  return (
    <nav className='flex justify-between items-center w-[92%]  mx-auto'>
      <div>
        <img
          className='w-16 cursor-pointer'
          src='https://cdn-icons-png.flaticon.com/512/5968/5968204.png'
          alt='...'
        />
      </div>
      <div className='nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
          <li
            className='hover:text-gray-500'
            onClick={() => {
              navigate('/tour');
            }}
          >
            Products
          </li>
          <li
            className='hover:text-gray-500'
            onClick={() => {
              navigate('/home');
            }}
          >
            Solution
          </li>
          <li>
            <a className='hover:text-gray-500' href='c'>
              Resource
            </a>
          </li>
          <li>
            <a className='hover:text-gray-500' href='d'>
              Developers
            </a>
          </li>
          <li>
            <a className='hover:text-gray-500' href='e'>
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>
          Sign in
        </button>
        <button
          className='text-3xl cursor-pointer md:hidden'
        >
       <svg className={menu}> </svg>  
        </button>
        {/* <ion-icon
          onclick='onToggleMenu(this)'
          name='menu'
          className='text-3xl cursor-pointer md:hidden'
        ></ion-icon> */}
      </div>
    </nav>
  );
};
export default Navbar;
