import React from 'react'
import FourthCard from './FourthCard'

function FourthCards({cardData}) {
  return (
    <div>
        {
            cardData.map((card,index)=>(
                <FourthCard
                    key={index}
                    img={card.img}
                    title={card.title}
                    text={card.text}
                    link={card.link}
                    linkText={card.linkText}
                />
            ))
        }
    </div>
  )
}

export default FourthCards