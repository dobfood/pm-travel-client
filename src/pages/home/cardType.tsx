import React from 'react';
import { Link } from 'react-router-dom';
type Props = { categorys: any };

const CardType = (props: Props) => {
  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-2xl font-bold mb-4'>Tìm theo loại du lịch</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {props.categorys.map((item: any) => (
          <Link
            to={{ pathname: '/tour',
             search: `?category=${item._id}` }}
            key={item._id}
            className='rounded overflow-hidden shadow-lg hover:-translate-y-3 hover:scale-105 transition duration-200 '
          >
            <img className='w-full h-48' src={item.image} alt={item.title} />
            <div className='px-6 py-2'>
              <div className='font-bold text-sm mb-4'>{item.title}</div>
              <p className='text-gray-700 text-md'>{item.total} địa điẻm</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardType;
