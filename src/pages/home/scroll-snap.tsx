import React, { useState } from 'react';
import CardList from './cardList';
type Props = { provinces: any };

const ScrollSnap = (props: Props) => {
  return (
    <div className='container mx-auto py-8 '>
      <h2 className='text-2xl font-bold mb-2'>Khám phá việt nam </h2>
      <p className='text-md  mb-2'>
        Các điểm phổ biến này có nhiều điều chờ đón bạn
      </p>
      <CardList cardsPerPage={20} cards={props.provinces} />
    </div>
  );
};

export default ScrollSnap;
