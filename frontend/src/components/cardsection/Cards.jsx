import React from "react";
import "./cards.css";

import ai2 from "../../assets/stall2.png";

const cardsData = [
  {
    id: 1,
    image: ai2,
    title: "Card 1",
    description: "Description for Card 1 Description for Card 3 Description for Card 3.",
  },
  {
    id: 2,
    image: ai2,
    title: "Card 2",
    description: "Description for Card 2 Description for Card 3 Description for Card 3.",
  },
  {
    id: 3,
    image: ai2,
    title: "Card 3",
    description: "Description for Card 3 Description for Card 3 Description for Card 3.",
  },
];

const Cards = () => {
  return (
    <div className="card-container">
      <div className="card_sect-text">
        <h1 className="gradient__text2"> Where Flavor Meets the Map </h1>
        <p>
          Locate. Savor. Share. Your Guide to Local Food Wonders and Vendor
          Stories.
        </p>
      </div>
      <div className="cards-elements">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={`Image ${card.id}`} />
            <div className="flex">
              <h3 className="card_title">{card.title}</h3>
              <p className="aa">{card.description}</p>
              <button type="button" className="btn_stall">View Stall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
