import React from 'react'
import './SingleServicePageHeader.scss'
import SixButton from '../../../../../components/Buttons/Btn-6/SixButton';
import FourthButton from '../../../../../components/Buttons/Btn-4/FourthButton';
import SEO from '../../SEO/Seo';
function SingleServicePageHeader() {
  return (
    <div>
      <div className="single-service-page-header">
        <div className="single-service-page-header-title">
          <h1>{SEO.header.title}</h1>
        </div>
        <div className="single-service-page-header-desc">
          <p>
            {SEO.header.desc}
          </p>
        </div>
        <div className="single-service-page-header-btn">
          {/* <SixButton title={"EXPLORE"} link={"#"} /> */}
          <FourthButton title={"EXPLORE"} link={SEO.header.btnLink} />
        </div>
      </div>
    </div>
  );
}

export default SingleServicePageHeader