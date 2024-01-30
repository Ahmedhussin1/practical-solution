import React from 'react'
import './ServicesCardGrid.scss'
import ServicesCardGrid from './ServicesCardGrid'
function ServicesCardsGrid({cardData}) {
  return (
    <div>
    <div><h1 id='cards' className='our-services'>Our Services</h1></div>
        <div className='services-grid-cards-container'>
            {cardData.map((data,index)=>(
                <ServicesCardGrid
                    key={index}
                    title={data.title}
                    desc={data.desc}
                    btnTitle={data.btnTitle}
                    btnLink={data.title}
                />
            ))}
        </div>
    </div>
  )
}

export default ServicesCardsGrid