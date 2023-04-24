import React, { useState } from 'react';
import { GrLocationPin } from 'react-icons/gr';
import thumbnail from '~/assets/thumbnail.jpg';
import { useNavigate } from 'react-router-dom';
type Props = {};

const Tours = (props: Props) => {
  const navigate = useNavigate()
  const filters = [
    { id: 1, name: 'Đề xuất của chúng tôi' },
    { id: 2, name: 'Sản phẩm được xem nhiều nhất' },
    { id: 3, name: 'Giá thấp nhất' }
  ];
  const [activeFilter, setActiveFilter] = useState(1);

  const products = [
    {
      id: 1,
      image: thumbnail,
      title: 'abc',
      content: 'chuc vui ve',
      price: 123,
      location: 'da nang',
      time: 4,
      province: 'da nang',
      ticker: 4
    },
    {
      id: 2,
      image: thumbnail,
      title: 'abc',
      content: 'chuc vui ve',
      price: 123,
      location: 'hue',
      time: 3,
      province: 'hue',
      ticker: 6
    }
  ];
  return (
    <div className='container mx-auto'>
      <div className=' bg-[#f5f5f5] flex justify-center my-3 space-x-3 gap-1 rounded-full'>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`py-2 px-6 text-xs rounded-full border border-[#e7e7e7] ${
              activeFilter === filter.id ? 'bg-white text-black' : ''
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='rounded p-4 bg-white grid grid-cols-12 gap-4 border'
          >
            <div className='col-span-4 pr-4 '>
              <img
                src={thumbnail}
                alt='Product'
                className='rounded-lg h-full w-full'
              />
            </div>
            <div className='col-span-8'>
              <p className='text-gray-600 text-md'>{product.location}</p>
              <h2 className='text-lg font-bold mb-1 hover:text-blue-500'>
                {product.title}
              </h2>
              <p className='text-gray-600 text-xs'>{product.content}</p>
              <div className='flex items-center text-gray-600 text-sm'>
                <span>Số ghế còn trống : {product.ticker}</span>
                <span className='flex justify-between ml-2'>
                  <GrLocationPin /> {product.location}
                </span>
              </div>
              <div className='flex items-center justify-between mb-4'>
                <span className='font-bold text-lg'>${product.price}</span>
                <button onClick={()=>{navigate('/tour/2')}} className='bg-white text-blue-500 px-4 py-1 rounded-md border border-blue-500 hover:text-white hover:bg-blue-400'>
                  Đặt ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
