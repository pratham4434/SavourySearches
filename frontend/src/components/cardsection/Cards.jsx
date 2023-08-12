import React from 'react';
import './cards.css'; 
import ai from "../../assets/ai.png";
import ai2 from "../../assets/ai2.png";


const cardsData = [
  {
    id: 1,
    image: ai2,
    title: 'Card 1',
    description: 'Description for Card 1.',
  },
  {
    id: 2,
    image: ai2,
    title: 'Card 2',
    description: 'Description for Card 2.',
  },
  {
    id: 3,
    image: ai2,
    title: 'Card 3',
    description: 'Description for Card 3.',
  },
];

const Cards = () => {
  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={`Image ${card.id}`} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards
