import React from 'react';
import Card from '../Card';

const Board = ({ cards, onCardClick }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default Board;