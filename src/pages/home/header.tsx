import React from 'react';
import banner from '~/assets/banner.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className=''>
      <div
        className='relative bg-center bg-cover h-300 hover:scale-105  transition duration-300 z-10 '
        style={{
          backgroundImage: `url(${banner})`
        }}
      >
        <div className='absolute inset-0 bg-gray-900 opacity-60'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32'>
          <div className='relative lg:flex lg:items-center'>
            <div className='lg:w-1/2'>
              <h1 className=' font-extrabold tracking-tight text-gray-100 '>
                <span
                  className='block  text-white xl:inline text-4xl
sm:text-5xl md:text6xl'
                >
                  Đặt lịch ngay!
                </span>
                <span
                  className='block  xl:inline text-2xl
sm:text-3xl md:text4xl mt-2'
                >
                  hãy trải nghiệm
                </span>
                <Link
                  to='/tour'
                  className='border-2 border-indigo-600 hover:bg-indigo-600 text-white rounded-full shadow-md py-3 px-6 font-bold mt-4 inline-block'
                >
                  Tìm tour
                </Link>
              </h1>
              <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl md:text-lg lg:mt-8 xl:text-xl'></p>
            </div>
            <div className='mt-10 lg:mt-0 lg:w-1/2'>
              <div className='flex items-center justify-center lg:justify-end'>
                <div className='max-w-lg w-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
