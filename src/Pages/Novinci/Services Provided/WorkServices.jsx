import React from "react";
import "./WorkServices.scss";
function WorkServices() {
  return (
    <div className="services-container">
      <div className="services-title">
        <h1>Services Provided</h1>
      </div>
      <div className="services-provided">
        <div className="services-1">
          <div className="services-title-2">
            <h2> Services Provided by<br/> Practical Solution: </h2>
          </div>
          <div className="services-list">
            <ul>
              <li>Landing page building</li>
              <li>Market and competition research</li>
              <li>Persona and UX analysis</li>
              <li>Conversion Rate Optimization</li>
              <li>Full-funnel analytics and journey tracking</li>
            </ul>
          </div>
        </div>
        <div className="services-2">
          <div className="services-title-2">
            <h2>Media Management for</h2>
          </div>
          <div className="services-list">
            <ul>
              <li>SEO & Content Marketing</li>
              <li>Facebook and Instagram Ads</li>
              <li>Google and Bing Ads</li>
              <li>Content Partnerships</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkServices;
