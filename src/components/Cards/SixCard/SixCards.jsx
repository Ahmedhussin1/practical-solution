import React from 'react'
import SixCard from './SixCard'
import './SixCard.scss'
function SixCards({cardData}) {
  return (
    <div className='six-cards'>
       {
            cardData.map((card,index)=>(
                <SixCard
                    key={index}
                    img={card.img}
                    title={card.title}
                    text={card.text}
                    btnTitle={card.btnTitle}
                />
            ))
        }
    </div>
  )
}

export default SixCards