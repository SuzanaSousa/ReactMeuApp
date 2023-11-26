import React, { useState, useEffect } from 'react';
import Board from '../Board';
import Card from '../Card';
import "../index.css";

const generateCards = () => {
    const images = Array.from({ length: 6 }, (_, index) => "./jogo/imagens{index + 1}.png");
    const initialCards = [...images, ...images].map((image, index) => ({
      id: index,
      image,
      isFlipped: false,
    }));
    return initialCards.sort(() => Math.random() - 0.5);
};


const Game = () => {
  const [cards, setCards] = useState([]);
  const [flippedIds, setFlippedIds] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  const handleCardClick = (clickedId) => {
    if (flippedIds.length < 2 && !flippedIds.includes(clickedId)) {
      const newFlippedIds = [...flippedIds, clickedId];
      setFlippedIds(newFlippedIds);

      if (newFlippedIds.length === 2) {
        const [firstId, secondId] = newFlippedIds;
        if (cards[firstId].image === cards[secondId].image) {
          setMatchedPairs([...matchedPairs, cards[firstId].image]);
        }
        setTimeout(() => setFlippedIds([]), 1000);
      }
    }
  };

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <Board cards={cards} onCardClick={handleCardClick} />
      {matchedPairs.length === 8 && <p>Congratulations! You've matched all pairs!</p>}
    </div>
  );
};

export default Game;
