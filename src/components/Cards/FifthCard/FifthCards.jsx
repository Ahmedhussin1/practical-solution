import React from 'react'
import './FifthCard.scss'
import FifthCard from './FifthCard';

function FifthCards({cardData}) {
  return (
    <div className='main'>
      <ul className='cards'>
        {cardData.map((card, index) => (
          <FifthCard
            key={index}
            img={card.img}
            title={card.title}
            text1={card.text1}
            text2={card.text2}
            btnTitle={card.btnTitle}
            btnLink={card.btnLink}
          />
        ))}
      </ul>
    </div>
  );
}

export default FifthCards