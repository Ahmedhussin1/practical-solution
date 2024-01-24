import React from "react";
import "./SecondCard.scss";
import SecondCard from "./SecondCard";
function SecondCards({ cardData }) {
  return (
    <div className="second-card-container">
      {cardData.map((card, index) => (
        <SecondCard
          key={index}
          img={card.img}
          heading={card.heading}
          text={card.text}
          btnLink={card.btnLink}
          btnText={card.btnText}
        />
      ))}
    </div>
  );
}

export default SecondCards;
