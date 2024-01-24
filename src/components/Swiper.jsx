import {Swiper, SwiperSlide} from "swiper/react"
import images from "../assets/images";
import "swiper/css";
import './Swiper.css'

function SwiperImg() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}

export default SwiperImg