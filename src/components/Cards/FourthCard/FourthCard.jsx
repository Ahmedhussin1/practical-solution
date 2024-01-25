import React from "react";
import "./FourthCard.scss";

function FourthCard({ img, title, text, linkText, link }) {
  return (
    <div className="container">
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-image">
            <img src={img} className="fadeIn" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{text}</p>
            </div>
            <div className="card-action">
              <a href={link}>{linkText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthCard;
