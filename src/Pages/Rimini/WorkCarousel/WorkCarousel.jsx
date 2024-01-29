import Carousel from "nuka-carousel";
import "./WorkCarousel.scss";

function WorkCarousel() {
  return (
    <div className="carousel-section">
      <div className="carousel-container">
    <div className="carousel-title">
        <h1>Snippet Of Our Work</h1>
    </div>
        <Carousel autoplay={true} adaptiveHeightAnimation={true} adaptiveHeight={true}>
          <img src="../../../../dist/assets/bg-0002-free-img.jpg" />
          <img src="../../../../dist/assets/sunscreen.jpg" />
          <img src="../../../../dist/assets/Screen Shot 2022-07-19 at 12.44.22 PM.png" />
          {/* <img src="/image4.png" />
        <img src="/image5.png" /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default WorkCarousel;

// https://formidable.com/open-source/nuka-carousel/api/
