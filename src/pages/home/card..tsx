import React from 'react';
import { Link } from 'react-router-dom';
type Props = { card: any };
const Card = (props: Props) => {
  return (
    <Link
      to={{ pathname: '/tour', search: `province=${props.card._id}` }}
      className='flex-shrink-0 w-48 h-48 m-2 shadow-md rounded-md overflow-hidden hover:-translate-y-3 hover:scale-105 transition duration-200'
    >
      <img
        src={props.card.image}
        alt={props.card.title}
        className='w-full h-32 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-md font-bold'>{props.card.title}</h2>
        <p className='text-sm text-gray-600'>{props.card.total} địa điểm</p>
      </div>
    </Link>
  );
};

export default Card;
