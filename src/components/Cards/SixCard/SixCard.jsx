import React from 'react'
import './SixCard.scss'
import ThirdButton from '../../Buttons/Btn-3/ThirdButton';

function SixCard({img, title, text, btnTitle}) {
  return (
    <div className="six-card">
      <div className="six-image">
        <img src={img}/>
      </div>
      <div className="content">
        <a href="#">
          <span className="six-title">
          {title}
          </span>
        </a>

        <p className="six-desc">
        {text}
        </p>

        <ThirdButton btnTitle={btnTitle}/>
        
      </div>
    </div>
  );
}

export default SixCard