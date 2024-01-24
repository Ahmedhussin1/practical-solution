import React from "react";
import FirstCard from "./FirstCard";
import "./FirstCard.scss";
const FirstCards = ({ cardData }) => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <FirstCard
          key={index}
          img={card.img}
          title={card.title}
          text={card.text}
          btn={card.btn}
          btnLink={card.btnLink}
        />
      ))}
    </div>
  );
};
export default FirstCards;
