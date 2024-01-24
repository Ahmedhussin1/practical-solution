import React from 'react'
import './MainHeader.scss'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

import FirstButton from '../../Buttons/Btn-1/FirstButton'
function MainHeader({header ,sectionName,link}) {
  return (
    <div className="main-header-container">
      <div className="section-name">
        <p>{sectionName}</p>
      </div>

      <div className="section-header">
        <h1>{header}</h1>
      </div>

      <div className='section-link'>
        <a href={link}><IoIosArrowForward className='arrow' /></a>
      </div>
    </div>
  );
}

export default MainHeader