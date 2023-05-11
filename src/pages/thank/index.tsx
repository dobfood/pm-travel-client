import React from 'react';
import { Link } from 'react-router-dom';
import background from '~/assets/background.png';

const Thank = () => {
  return (
    <div className='relative flex justify-center items-center py-4 px-8 bg-slate-100 w-full min-h-screen border border-full shadow-xl rounded-full text-center'>
      <div className='flex flex-col justify-center items-center'>
        <img
          src={background}
          alt='background'
          className='h-84 w-1/2 mb-4 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-lg'
        />
        <span className=' text-4xl font-bold uppercase  transition duration-300 ease-in-out cursor-pointer'>
          Cảm ơn bạn đã đặt tour tại PM-TRAVEL!
        </span>
        <p className='text-gray-700 mt-2'>
          Thông tin tour đã được gửi vào gmail của bạn. Vui lòng xác nhận thông
          tin và thanh toán.
        </p>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md'>
          <Link
            to='/home'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Quay về trang chủ
          </Link>
        </button>
        <div className=' text-xs mt-4 text-gray-700'>
          Nếu bạn có bất kỳ thắc mắc nào, hãy liên hệ với chúng tôi qua số điện
          thoại{' '}
          <a href='tel:0989 888 777' className='text-blue-800'>
            0989 888 777
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Thank;
