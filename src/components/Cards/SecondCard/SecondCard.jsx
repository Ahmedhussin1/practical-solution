import React from 'react'
import './SecondCard.scss'
import { IoIosArrowForward } from "react-icons/io";

function SecondCard({img,heading,text,btnLink,btnText}) {
  return (
    <div className="second-card">

      <div className="second-card-img">
        <img src={img} />
      </div>

      <div className="second-card-text">
        <h1>{heading}</h1>
        <p>{text}</p>
        <a className="btn-link" href={btnLink}>
          {btnText}
          <IoIosArrowForward className="react-icon" />
        </a>
        
      </div>

    </div>
  );
}

export default SecondCard