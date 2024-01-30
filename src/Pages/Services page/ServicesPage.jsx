import React from 'react'
import './ServicesPage.scss'
import AnimatedCard from '../../components/Cards/Animated Cards/AnimatedCard'
import GridMotion from '../../components/Grid/GridMotion'
import FourthButton from '../../components/Buttons/Btn-4/FourthButton';
import { Grid } from 'swiper/modules';
import ThirdCard from '../../components/Cards/ThirdCard/ThirdCard';
import SecondCard from '../../components/Cards/SecondCard/SecondCard';
import ThirdButton from '../../components/Buttons/Btn-3/ThirdButton';
import FirstButton from '../../components/Buttons/Btn-1/FirstButton';
import ServicesCardsGrid from './Services cards grid/ServicesCardsGrid';
import ServicesCardGridData from './Services cards grid/ServicesCardGridData';
function ServicesPage() {
  return (
    <div className='services-page-container'>
      {/* header section */}
      <div className="services-header-section">
        <div className="services-header-title">
          <h1>Growth Marketing Services Designed for Long Term Growth</h1>
        </div>
        <div className="services-header-subtitle">
          <h2>
            We build full-funnel solutions that power results-driven growth.
          </h2>
        </div>
        <div className="services-header-desc">
          <p>
            Introducing the NoGood formula of strategy, experimentation and
            refinement. From hypotheses to insights, we are in constant
            scientific pursuit of the perfect balance between data and
            creativity that brands need to maximize their revenue potential.
          </p>
        </div>
        <FourthButton title={'Learn More'} link={'#cards'}/>
      </div>
      {/* services cards section */}
      <ServicesCardsGrid cardData={ServicesCardGridData}/>
    </div>
  );
}

export default ServicesPage