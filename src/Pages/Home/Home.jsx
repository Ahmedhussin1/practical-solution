import "./Home.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../../assets/Animation - 1705691414913.json";
import AutoPlaySwiper from "../../components/AutoPlaySwiper";
import FirstCardData from "../../Data/FirstCardData";
import FirstCards from "../../components/Cards/FirstCard/FirstCards";
import WhoWeAre from "../../components/whoWeAre/WhoWeAre";
import SecondCards from "../../components/Cards/SecondCard/SecondCards";
import SecondCardData from "../../Data/SecondCardData";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
function Home() {
  return (
    <div className="container">
      {/* hero section */}
      <div className="hero-section">
        <div className="header-section">
          <h1 className="header">
            We Help Impactful
            <br />
            Brands Build <span>Scalable</span>
            <br />
            Compounding Growth.
          </h1>
        </div>

        <div className="animation-section">
          <Lottie className="animation" animationData={animationData} />
        </div>
      </div>
      <MainHeader sectionName={"Who Are WE"} header={"A Little About Us"} link={"#"} />

      <div>
        <WhoWeAre />
      </div>
      <MainHeader sectionName={"Our Work"} header={"Some Of Our Recent Work"} />
      <div>
        <SecondCards cardData={SecondCardData} />
      </div>

      {/* image slider and header section */}
      {/* <div className="header-swiper-section">
        <div className="right">
          <h6>CREATIVE INSPIRATION IN YOUR BRAND</h6>
          <h2>We'll have your brand teeming with creative inspiration.</h2>
          <p>
            To stand out in today's online ecosystem a company needs an
            awe-inspiring brand. Dream Theory adds the touch of creativity your
            brand needs to complement the growth of your company.
          </p>
        </div>

        <div className="left">
          <AutoPlaySwiper />
        </div>
      </div> */}

      <div className="missing-puzzle">
        <motion.div
          className="right-puzzle"
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img src="https://nogood.io/wp-content/uploads/2021/03/puzzle.svg" />
        </motion.div>

        <div className="left-puzzle">
          <h2>We are the missing piece of your marketing puzzle.</h2>
          <p>
            When you partner with NoGood, you get a tailored growth squad of
            proven experts that understand your business and are committed to
            achieving rapid growth that taps into your full potential. We are a
            team built on the belief that when the right people and ideas
            connect, anything’s possible.
          </p>
        </div>
      </div>

      <div>
        <FirstCards cardData={FirstCardData} />
      </div>
    </div>
  );
}

export default Home;
