import React, { useState } from 'react';
import Card from './card.';
type Props = { cardsPerPage: any; cards: any };
const CardList = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastCardIndex = currentPage * props.cardsPerPage;
  const firstCardIndex = lastCardIndex - props.cardsPerPage;
  const currentCards = props.cards.slice(firstCardIndex, lastCardIndex);

  return (
    <div className='flex flex-col items-center justify-center mt-10 rounded-lg'>
      <div className='flex w-full overflow-x-scroll no-scrollbar pt-2'>
        {currentCards.map((card: any) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
