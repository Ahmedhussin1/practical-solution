import { NumberFormatter } from "@mantine/core";
import "./About.scss";
import FourthButton from "../../components/Buttons/Btn-4/FourthButton";
import Testimonial from "./About Page Component/Tistimoial";
import Testimonials from "./About Page Component/Testimonials";
import TestimonialData from "./About Page Component/TestimonialsData";
import OurValues from "./About Page Component/OurValues";
import ContactUsBanner from "../../components/Contact us Banner/ContactUsBanner";
function About() {
  return (
    <div className="about-page-container">
      {/* about page header */}
      <div className="about-header-section">
        <div className="about-header-title">
          <h1>
            We are the <br /> James Bond of Advertising
          </h1>
        </div>
        <div className="about-header-subtitle">
          <h2>
            We build full-funnel solutions that power results-driven growth.
          </h2>
        </div>
        <div className="about-header-desc">
          <p>
            Our ads won’t make the audience wait in agony for the skip button.
            With the best content and chess-like strategy, we build you
            glass-shattering brands
          </p>
        </div>
      </div>
      {/* numbers Generated */}
      <div className="about-page-numbers-generated-container">
        <div className="about-page-numbers-header">
          <h1>Our Numbers</h1>
          <p>
            Empowering businesses to thrive in the digital landscape, our
            marketing agency has delivered remarkable results, achieving
            substantial increases in client engagement, brand visibility, and
            revenue growth. Through strategic campaigns and data-driven
            approaches, we've consistently surpassed expectations, driving
            meaningful success for our diverse portfolio of clients.
          </p>
          <div>
            <FourthButton title={"See Our Work"} link={"/work"} />
          </div>
        </div>
        <div className="numbers-section">
          <div className="numbers">
            <h2>20 +</h2>
            <p>Clients Worldwide</p>
          </div>
          <div className="numbers">
            <h2>75 +</h2>
            <p>Projects Completed</p>
          </div>
          <div className="numbers">
            <h2>30m +</h2>
            <p>Revenue Generated</p>
          </div>
        </div>
      </div>
      {/* our mission*/}
      <div className="our-mission-container">
        <div className="our-mission-left-section">
          <h2> Our Mission </h2>
          <h1>‍You grow. We grow.</h1>
          <p>
            We ensure the Growth of your business by being the catalyst in the
            concoction of your goals and our hard work.
          </p>
        </div>
        <div className="our-mission-right-section">
          <img src="https://growthcrafters.co/wp-content/uploads/2023/06/64199bc98761480b2dd8ded8_austin-distel-wawEfYdpkag-unsplash.jpg" />
        </div>
      </div>
      {/* testimonials */}
      <Testimonials testimonialData={TestimonialData}/>
      <OurValues/>
      <ContactUsBanner/>
    </div>
  );
}

export default About;
