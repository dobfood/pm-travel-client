import React from 'react';
import Tours from './tour';
import Filter from './filter';
import thumbnail from '~/assets/thumbnail.jpg';
type Props = {};

const Tour = (props: Props) => {
  return (
    <>
      <div className='relative'>
        <img
          src={thumbnail}
          alt='your-image-description'
          className='w-screen h-48 mb-2 opacity-80'
        />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <h1 className='text-2xl text-white text-center'>
            Hãy lựa chọn những chuyến đi phù hợp với bạn
          </h1>
        </div>
      </div>

      <div className='pr-32 pl-32'>
        <div className='flex flex-col space-y-2'>
          <h2 className='text-2xl font-bold mt-5'>Địa điểm tham quan</h2>
          <p className='font-bold pb-4'>4 hoạt động</p>
        </div>
        <div className='grid grid-cols-3 gap-8 lg:grid-cols-1 md:grid-cols-3'>
          <div className=' col-start-1 col-span-1'>
            <Filter />
          </div>
          <div className=' col-start-2 col-span-2'>
            <Tours />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
