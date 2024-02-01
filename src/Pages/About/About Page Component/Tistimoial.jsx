import React from "react";
import "./Testimonial.scss";
import FourthButton from "../../../components/Buttons/Btn-4/FourthButton";
function Testimonial({ img, title, desc, authorName, authorPosition, link }) {
  return (
    <div>
      <div className="testimonial-section">
        <div className="testimonial-img">
          <img src={img} />
        </div>

        <div className="testimonial-data">
          <div className="testimonial-data-header">
            {/* <span className="circle"></span>
            <span className="circle"></span> */}
              <h1>{title}</h1>
          </div>
          <p>{desc}</p>
          <div className="testimonial-author">
            <p>{authorName}</p>
            <p>{authorPosition}</p>
          </div>

          <div className="testimonial-btn">
            <FourthButton title={"Full Case Study"} link={link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
