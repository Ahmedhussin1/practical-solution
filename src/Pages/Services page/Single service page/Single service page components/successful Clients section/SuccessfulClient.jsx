import React from "react";
import "./SuccessfulClient.scss";
import SEO from "../../SEO/Seo";
import FourthButton from "../../../../../components/Buttons/Btn-4/FourthButton";
function SuccessfulClient({data}) {
  return (
    <div className="successful-client">

      <div className="successful-client-left-section">
        <div className="single-service-successful-client-left-img">
          <img src={data.successfulClient.img} />
        </div>
        <hr />
        <div className="successful-client-number-container">
            <div className="successful-client-numbers">
              <h1>{data.successfulClient.num1}</h1>
              <p>{data.successfulClient.num1Desc}</p>
            </div>
            <div className="successful-client-numbers">
              <h1>{data.successfulClient.num2}</h1>
              <p>{data.successfulClient.num2Desc}</p>
            </div>
        </div>
      </div>

      <div className="single-service-right-data">
        <div className="single-service-right-title">
          <h1>{data.successfulClient.title}</h1>
        </div>
        <div className="single-service-right-subtitle">
          <h2>{data.successfulClient.subtitle}</h2>
        </div>
        <div className="single-service-right-desc">
          <p>{data.successfulClient.desc}</p>
        </div>
        <div className="single-service-right-btn">
          <FourthButton title={"TALK TO US"} link={"/contact"} />
        </div>
      </div>
    </div>
  );
}

export default SuccessfulClient;
