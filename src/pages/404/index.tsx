import React from 'react';
import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className='h-screen w-screen bg=[#f3f4f6] 0 flex items-center'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <div className='max-w-md'>
          <div className='text-5xl font-dark font-bold'>404</div>
          <p className='text-2xl md:text-3xl font-light leading-normal'>
            Xin lỗi chúng tôi không thể tìm thấy trang này.{' '}
          </p>
          <p className='mb-8'>
            Nhưng đừng lo, bạn có thể tìm thấy nhiều thứ khác trên trang chủ của
            chúng tôi.
          </p>

          <button className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700'>
            <Link to='/'> Trở về trang chủ </Link>
          </button>
        </div>
        <div className='lg:max-w-lg md:max-w-md xs:max-w-xs'>
          <img src='https://i.ibb.co/ck1SGFJ/Group.png' alt='123' />
        </div>
      </div>
    </div>
  );
};

export default Error404;
