import React, { useState } from 'react';
import CardList from './cardList';
type Props = {};

function ScrollSnap(props: Props) {
  const cards = [
    {
      id: 1,
      title: 'Quảng bình',
      image: 'https://source.unsplash.com/random/800x600',
      description:'4 địa điểm du lịch'
    },
    {
      id: 2,
      title: 'Phú quóc',
      image: 'https://source.unsplash.com/random/800x600',
      description:'2 địa điểm du lịch'
    },
    {
      id: 3,
      title: 'Hồ chí minh',
      image: 'https://source.unsplash.com/random/800x600',
      description:'12 địa điểm du lịch'
    },
    {
      id: 4,
      title: 'Nha trang',
      image: 'https://source.unsplash.com/random/800x600',
      description:'8 địa điểm du lịch'
    },
    {
      id: 5,
      title: 'Hội an',
      image: 'https://source.unsplash.com/random/800x600',
      description:'5 địa diểm du lịch'
    },
    {
      id: 6,
      title: 'Hà nội',
      image: 'https://source.unsplash.com/random/800x600',
      description:'30 địa điểm du lịch'
    },
    {
      id: 1,
      title: 'Card 1',
      image: 'https://source.unsplash.com/random/800x600',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus magna eu risus vestibulum, vel accumsan nisi convallis.'
    }
  ];
  return (
    <div className='container mx-auto py-8 '>
      <h2 className='text-2xl font-bold mb-2'>Khám phá việt nam </h2>
      <p className='text-md  mb-2'>Các điểm phổ biến này có nhiều điều chờ đón bạn</p>
     
      <CardList cardsPerPage={5} cards={cards} />
    </div>
  );
}

export default ScrollSnap;
