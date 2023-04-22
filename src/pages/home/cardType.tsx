import React from 'react';
import thumbnail from '~/assets/thumbnail.jpg';
type Props = {};

const CardType = (props: Props) => {
  const data = [
    { id: 1, title: 'Du lịch nghỉ dưỡng', image: thumbnail, quantity: 10 },
    { id: 2, title: 'Du lịch sinh thái', image: thumbnail, quantity: 20 },
    { id: 3, title: 'Du lịch văn hóa', image: thumbnail, quantity: 30 },
    { id: 4, title: 'Du lịch thám hiểm', image: thumbnail, quantity: 40 }
  ];
  return (
    <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-4">Tìm theo loại du lịch</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {data.map((item) => (
        <div key={item.id} className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={item.image} alt={item.title} />
          <div className='px-6 py-4'>
            <div className='font-bold text-sm mb-2'>{item.title}</div>
            <p className='text-gray-700 text-xs'>{item.quantity} địa điẻm</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardType;
