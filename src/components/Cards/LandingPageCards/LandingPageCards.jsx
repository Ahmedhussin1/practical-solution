import React from 'react'
import './LandingPageCard.scss'
import LandingPageCard from './LandingPageCard'

function LandingPageCards({cardData}) {
  return (
    <div className='landing-page-cards-container'>
        {cardData.map((card,index)=>(
            <LandingPageCard
               key={index}
               title={card.title}
               subTitle={card.subTitle}
               text={card.text}
            />
        ))}
    </div>
  )
}

export default LandingPageCards