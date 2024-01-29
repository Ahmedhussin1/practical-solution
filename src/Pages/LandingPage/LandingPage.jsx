import LandingPageCardData from "../../Data/LandingPageCardData";
import HorizontalCards from "../../components/Cards/LandingPageCards/HorizontalCard/HorizontalCards";
import LandingPageCards from "../../components/Cards/LandingPageCards/LandingPageCards";
import "./LandingPage.scss";
import HorizantalCardData from "../../Data/HorizontalCardData";
import GridCard from "../../components/Cards/LandingPageCards/GirdCards/GridCard";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import ContactUsBanner from "../../components/Contact us Banner/ContactUsBanner";

function LandingPage() {
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
    <div className="landing-container">
      {/* hero section */}
      <div className="hero-section">
        <div className="hero-section-span">
          {" "}
          <span></span>
        </div>
        <div className="hero-section-header">
          <h1>
            creative &
            <br />
            Innovation
            <br />
            Ideas
          </h1>
        </div>
        <div className="hero-section-text">
          <p>
            Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
            JAMES OLIVE
          </p>
        </div>
      </div>

      {/* cards div */}
      <div className="cards-section">
        <LandingPageCards cardData={LandingPageCardData} />
      </div>

      {/* sections divider */}
      <MainHeader number={"02"} title={"Services"} header={"How we do it"} />

      {/* Horizontal Cards services */}
      <div>
        <HorizontalCards cardData={HorizantalCardData} />
      </div>

      {/* sections divider */}
      <MainHeader number={"03"} title={"work"} header={"Our Recent Work"} />

      {/* recent work grid cards */}
      <div className="gird-section">
        <GridCard />
      </div>

      {/* sections divider */}
      <MainHeader number={"04"} title={"About us"} header={"Who we are"} />

      {/* who are we section */}
      <div className="who-are-we-section">
        <div className="top-section">
          <h2>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </h2>
        </div>
        <div className="bottom-section">
          <h2>
            We are the
            <br /> decisive factor
            <br /> behind your
            <br /> success
          </h2>
          <div className="bottom-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      {/* sections divider */}
      <MainHeader number={"05"} title={"Some of"} header={"Our clients"} />

      {/* our clients section */}
      <div className="our-clients-section">
        <div className="landing-page-div1">
          <img src="https://websitedemos.net/marketing-agency-02/wp-content/uploads/sites/725/2020/11/logo-004-free-img.png" />
        </div>
        <div className="landing-page-div2">
          <img src="https://websitedemos.net/marketing-agency-02/wp-content/uploads/sites/725/2020/11/logo-002-free-img.png" />
        </div>
        <div className="landing-page-div3">
          <img src="https://websitedemos.net/marketing-agency-02/wp-content/uploads/sites/725/2020/11/logo-006-free-img.png" />
        </div>
        <div className="landing-page-div4">
          <img src="https://websitedemos.net/marketing-agency-02/wp-content/uploads/sites/725/2020/11/logo-005-free-img.png" />
        </div>
      </div>

      <MainHeader number={"06"} title={"Contact"} header={"Talk to us"} />
      <ContactUsBanner/>
    </div>
  );
}

export default LandingPage;
