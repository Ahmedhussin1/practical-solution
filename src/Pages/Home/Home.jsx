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
import ThirdCard from "../../components/Cards/ThirdCard/ThirdCard";
import FourthCards from "../../components/Cards/FourthCard/FourthCards";
import FourthCardData from "../../Data/FourthCardData";
import FifthCards from "../../components/Cards/FifthCard/FifthCards";
import FifthCardData from "../../Data/FifthCardData";
import QuoteCard from "../../components/Cards/QuoteCard/QuoteCard";
import QuoteCardData from "../../Data/QuoteCardData";
import SixCards from "../../components/Cards/SixCard/SixCards";
import SixCardData from "../../Data/SixCardData";
import Btn from "../../components/Buttons/Btn-5/Btn";
import SevenCard from "../../components/Cards/sevenCard/SevenCard";
function Home() {
  const card1 = {
    // author: "John Doe",
    // date: "Aug. 24, 2015",
    tags: ["Learn", "Code", "HTML", "CSS"],
    title: "Social Media Marketing",
    subtitle:
      "Elevate your brand with our Social Media Marketing. Boost eCommerce sales and foster customer loyalty through tailored strategies.",
    content:
      "Amplify your brand's visibility with our Social Media Marketing expertise. We craft compelling campaigns to boost eCommerce sales, foster customer loyalty, and elevate your online presence. Transform your digital strategy with our tailored social media solutions.",
    imageUrl: "../../../dist/assets/pexels-pixabay-265087.jpg",
    alt: false,
    btnTitle: "Learn More",
  };

  const card2 = {
    author: "Jane Doe",
    date: "July. 15, 2015",
    tags: ["Learn", "Code", "JavaScript"],
    title: "Mastering the Language",
    subtitle: "Java is not the same as JavaScript",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
    imageUrl:
      "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
    alt: true,
    btnTitle: "Learn More",
  };

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
      <MainHeader
        sectionName={"Who Are WE"}
        header={"A Little About Us"}
        link={"#"}
      />

      <div>
        <WhoWeAre />
      </div>
      <MainHeader sectionName={"Our Work"} header={"Some Of Our Recent Work"} />
      {/* <div>
        <SecondCards cardData={SecondCardData} />
      </div> */}
      <div>
        <FifthCards cardData={FifthCardData} />
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
          <img src="../../../dist/assets/puzzle (1).svg" />
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
      <div>
        <ThirdCard />
      </div>
      <div>
        <SevenCard {...card1}/>
      </div>
      <div>
        <SevenCard {...card2}/>
      </div>
      <div>
        <SevenCard {...card1}/>
      </div>
      <div>
        <SevenCard {...card2}/>
      </div>

      {/* <div>
        <FourthCards cardData={FourthCardData}/>
      </div> */}

      {/* <div>
        <QuoteCard cardData={QuoteCardData}/>
      </div> */}

      {/* <div>
        <SixCards cardData={SixCardData}/>
      </div> */}
    </div>
  );
}

export default Home;
