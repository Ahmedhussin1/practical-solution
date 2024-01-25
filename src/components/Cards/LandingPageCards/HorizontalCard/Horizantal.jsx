import React from 'react'
import FourthButton from '../../../Buttons/Btn-4/FourthButton'
import './HorizontalCard.scss'
function Horizantal({img,title,text,btnText,btnLink}) {
  return (
    <div className='horizontal-card-container'>
        <div className='horizontal-img-container'>
            <img src={img}/>
        </div>
        <div className='horizontal-text-container'>
            <h1>{title}</h1>
            <p>{text}</p>
            <div>
                <FourthButton title={btnText} link={btnLink}/>
            </div>
        </div>
    </div>
  )
}

export default Horizantal