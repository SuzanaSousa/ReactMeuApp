import React from 'react';

const Card = ({ id, image, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(id)}>
      {isFlipped ? <img src={image} alt={`Card ${id}`} /> : null}
    </div>
  );
};

export default Card;