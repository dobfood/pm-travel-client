import React from 'react';

const Card = ({ card }) => {
  return (
    <div className='flex-shrink-0 w-64 h-50 m-3 shadow-md rounded-md overflow-hidden'>
      <img
        src={card.image}
        alt={card.title}
        className='w-full h-40 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-lg font-bold'>{card.title}</h2>
        <p className='text-sm text-gray-600'>{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
