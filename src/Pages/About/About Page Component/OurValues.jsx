import './OurValues.scss'
import { IoSettings } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";


function OurValues() {
  return (
    <div className="about-page-value-container">
      <div className="about-page-value-header">
        <p>Our values</p>
        <h1>
          The core values behind
          <br /> our work
        </h1>
        <p>
          To make sure we are the torch bearer of Growth for the
          <br /> passionate entrepreneur Our values
        </p>
      </div>
      <div className="about-page-value-cards-component">
        <div className="about-page-value-card">
          <div className="about-page-value-card-icon">
            <IoSettings fontSize={50} color={"white"} />
          </div>
          <div className="about-page-value-card-data">
            <h1>Reliable. Result-oriented</h1>
            <p>
              Guided by your trust, Growth crafters delivers growth with expert
              teams, No yes-sir team, just real results.
            </p>
          </div>
        </div>
        <div className="about-page-value-card">
          <div className="about-page-value-card-icon">
            <FaCheckCircle fontSize={50} color={"white"} />
          </div>
          <div className="about-page-value-card-data">
            <h1>Think Rigorously</h1>
            <p>
              We care about being right, which often takes reasoning from first
              principles.
            </p>
          </div>
        </div>
        <div className="about-page-value-card">
          <div className="about-page-value-card-icon">
            <AiOutlineStock fontSize={50} color={"white"} />
          </div>
          <div className="about-page-value-card-data">
            <h1>Growth</h1>
            <p>
              By the standards of the rest of the world, we overthrust, and
              we're okay with that.
            </p>
          </div>
        </div>
        <div className="about-page-value-card">
          <div className="about-page-value-card-icon">
            <IoIosPeople fontSize={50} color={"white"} />
          </div>
          <div className="about-page-value-card-data">
            <h1>Optimism</h1>
            <p>
              We are micro pessimists but macro optimists. Full of life & joyful
              attitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues