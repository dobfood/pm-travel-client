import React from 'react';
import { Link } from 'react-router-dom';
import image from '~/assets/image.jpg';

type Props = {};

function Banner(props: Props) {
  return (
    <>
      <div className='relative border-b-2 border-gray-400 pb-4'>
        <h2 className='text-2xl font-bold mb-2'>Ưu đãi</h2>

        <p className='text-sm mb-4'>
          Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
        </p>
        <div className='relative h-48 bg-cover bg-center'>
          <img
            src={image}
            className='absolute inset-0 w-full h-full object-cover rounded-lg'
            alt='banner'
          />
          <div className='absolute top-4 left-0 p-8 bottom-6'>
            <h4 className='text-lg text-white mb-2 tracking-wider'>
              Đổi gió một thời gian
            </h4>
            <p className='text-white text-sm mb-4 tracking-wider'>
              Tận hưởng sự khám phá với tour du lịch theo tháng trên PM-Travel
            </p>
            <button className='px-2 py-1 mt-3 bg-blue-500 text-white rounded hover:bg-blue-600'>
              <Link to='/tour'> Khám phá tour theo tháng </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
