import React from 'react'
import FourthButton from '../../../components/Buttons/Btn-4/FourthButton'
import './ServicesCardGrid.scss'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function ServicesCardGrid({title,desc,btnTitle,btnLink}) {
  return (
    <Link to={btnLink}>
      <div className="services-card-grid-container">
        <div className="services-card-grid-circle-line">
          <span className="circle"></span>
          <span className="line"></span>
        </div>
        <div className="services-card-grid-header">
          <h1>{title}</h1>
        </div>
        <div className="services-card-grid-desc">
          <p>{desc}</p>
        </div>
        <div className="services-card-grid-btn">
          <FourthButton title={btnTitle} link={btnLink} />
        </div>
      </div>
    </Link>
  );
}

export default ServicesCardGrid