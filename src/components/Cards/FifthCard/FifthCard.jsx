import React from 'react'
import './FifthCard.scss'
import FirstButton from '../../Buttons/Btn-1/FirstButton'
import ThirdButton from '../../Buttons/Btn-3/ThirdButton'
import FourthButton from '../../Buttons/Btn-4/FourthButton'
function FifthCard({img,title,text1,text2,btnTitle,btnLink}) {
  return (
    <li className="cards_item" id="item_salad">
      <div className="card">
        {/* <div className="card_price">$9</div> */}
        <div className="card_image">
            <img src={img} />
        </div>
        <div className="card_content">
          <h2 className="card_title">{title}</h2>
          <div className="card_text">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </div>
        <div className='button-container'>
            <FourthButton link={btnLink} title={btnTitle}/>
        </div>
      </div>
    </li>
  )
}

export default FifthCard