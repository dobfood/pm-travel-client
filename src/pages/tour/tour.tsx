import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { GrLocationPin } from 'react-icons/gr';
import { useNavigate, Link } from 'react-router-dom';
import { Tour } from '~/interfaces';
type Props = {
  setFilteredTours: React.Dispatch<React.SetStateAction<Tour[] | undefined>>;
  tours: Tour[];
  filteredTours: Tour[];
};
const Tours = ({ setFilteredTours, tours, filteredTours }: Props) => {
  const filters = [
    { id: '1', name: 'Đề xuất của chúng tôi' },
    { id: '2', name: 'Sản phẩm được xem nhiều nhất' },
    { id: '3', name: 'Giá thấp nhất' }
  ];
  const [activeFilter, setActiveFilter] = useState('1');

  return (
    <div className='container mx-auto'>
      <div className=' bg-[#f5f5f5] flex justify-center my-3 space-x-3 gap-1 rounded-full mb-4'>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`py-2 px-6 text-xs rounded-full border border-[#e7e7e7] ${
              activeFilter === filter.id ? 'bg-white text-black' : ''
            }`}
            onClick={() => {
              setActiveFilter(filter.id);

              if (filter.id === '1') {
                setFilteredTours([...tours]);
              } else if (filter.id === '2') {
                setFilteredTours((t) =>
                  _.clone(
                    t?.sort((a, b) => {
                      return b.totalViews - a.totalViews;
                    })
                  )
                );
              } else if (filter.id === '3') {
                setFilteredTours((t) =>
                  _.clone(
                    t?.sort((a, b) => {
                      return a.price - b.price;
                    })
                  )
                );
              }
            }}
          >
            {filter.name}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mb-4'>
        {filteredTours.map((tour: Tour) => (
          <Link
            to={`/tour/${tour._id}`}
            key={tour._id}
            className='rounded p-4 bg-white grid grid-cols-12 gap-4 border overflow-hidden hover:-translate-y-2 hover:scale-105 transition duration-200'
          >
            <div className='col-span-4 '>
              <img
                src={tour.thumbnail.url}
                alt='tour'
                className='rounded-lg h-32 w-full'
              />
            </div>
            <div className='col-span-8'>
              <p className='text-gray-600 text-md'>{tour.destination?.title}</p>
              <h2 className='text-lg font-bold mb-1 hover:text-blue-500'>
                {tour.title}
              </h2>
              <p className='text-gray-600 text-xs'>{tour.content}</p>
              <div
                className={`flex items-center text-gray-600 text-sm ${
                  tour.maxNumber == 0 ? 'disabled' : ''
                }`}
              >
                <b>Số ghế còn trống : {tour.maxNumber}</b>
                <span className='flex justify-between ml-2'>
                  <GrLocationPin /> {tour.idCategory?.title}
                </span>
              </div>
              <div className='flex items-center justify-between mb-4'>
                <span className='font-bold text-lg'>
                  {tour.price.toLocaleString('vi-VN', { currency: 'VND' })} VNĐ
                </span>
                <button className='bg-white text-blue-500 px-4 py-1 rounded-md border border-blue-500 hover:text-white hover:bg-blue-400'>
                  <Link to={`/tour/${tour._id}`}> Đặt ngay</Link>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tours;
