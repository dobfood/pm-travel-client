import React, { useState } from 'react';
import Card from './card.';
const CardList = ({ cardsPerPage, cards }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div className='flex w-full overflow-x-scroll no-scrollbar'>
        {currentCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
