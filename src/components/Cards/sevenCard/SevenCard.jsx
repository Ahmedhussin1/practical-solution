import React from 'react'
import './SevenCard.scss'
import FourthButton from '../../Buttons/Btn-4/FourthButton';

function SevenCard({
//   author,
//   date,
//   tags,
  title,
  subtitle,
  content,
  imageUrl,
  alt,
  btnTitle,
  btnLink,
}) {
  return (
    <div className={`blog-card ${alt ? "alt" : ""}`}>
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <ul className="details">
        <h1>Learn More About Us Now</h1>
        <FourthButton link={btnLink} title={btnTitle}/>
          {/* <li className="author">
            <a href="#">{author}</a>
          </li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <a href="#">{tag}</a>
                </li>
              ))}
            </ul>
          </li> */}
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        <p className="read-more">
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  );
}

export default SevenCard