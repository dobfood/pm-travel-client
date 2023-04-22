import React from 'react';
import { BsStar } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import thumbnail from '~/assets/thumbnail.jpg';
type Props = {};

const Top = (props: Props) => {
  const data = [
    {
      id: 1,
      name: 'Product 1',
      price: 500000,
      rating: 4,
      views: 100,
      location: 'Location 1',
      image: thumbnail
    },
    {
      id: 2,
      name: 'Product 2',
      price: 500000,
      rating: 3,
      views: 200,
      location: 'Location 2',
      image: thumbnail
    },
    {
      id: 3,
      name: 'Product 3',
      price: 500000,
      rating: 5,
      views: 300,
      location: 'Location 3',
      image: thumbnail
    },
    {
      id: 4,
      name: 'Product 4',
      price: 500000,
      rating: 4,
      views: 400,
      location: 'Location 4',
      image: thumbnail
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500000,
      rating: 4.5,
      views: 500,
      location: 'Location 5',
      image: thumbnail
    }
  ];
  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-2xl font-bold mb-2'>
        Top 5 tour được người dùng chú ý
      </h2>
      <p className='text-md  mb-2'>Các điểm này có nhiều điều chờ đón bạn</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-4'>
        {data.map((item: any) => (
          <div
            className='bg-white shadow-lg rounded-lg overflow-hidden'
            key={item.id}
          >
            <img
              className='w-full h-48 object-cover'
              src={item.image}
              alt={item.name}
            />
            <div className='p-4'>
              <h3 className='font-bold text-xl mb-2'>{item.name}</h3>
              <div className='flex items-center justify-between'>
                <span className=' flex font-bold text-md'>
                  {item.rating}
                  <FaStar />
                </span>
                <div className='flex items-center'>
                  <span className='text-gray-500 text-sm'>{item.location}</span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <span className='font-medium text-md'>{item.price} VNĐ</span>
                <div className='flex items-center'>
                  <span className='text-gray-500 text-xs'>
                    {item.views} views
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
