import React from 'react'
import offersData from '../../OffersData'
import OffersCard from './OffersCard'
function OffersCards({cardData}) {
  return (
    <div>
        {
            cardData.map((card,index)=>(
                <OffersCard 
                key={index}
                title={card.title}
                desc={card.desc}    
                />
            ))
        }
        <hr className='horizontal-line'/>
    </div>
  )
}

export default OffersCards