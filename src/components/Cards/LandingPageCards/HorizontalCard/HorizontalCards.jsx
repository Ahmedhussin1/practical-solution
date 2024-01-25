import React from 'react'
import Horizantal from './Horizantal'
import './HorizontalCard.scss'

function HorizontalCards({cardData}) {
  return (
    <div className='horizontal-cards-container'>
        {cardData.map((card,index)=>(
            <Horizantal
                key={index}
                img={card.img}
                title={card.title}
                text={card.text}
                btnText={card.btnText}
                btnLink={card.btnLink}
            />
        ))}
    </div>
  )
}

export default HorizontalCards