import SEO from "../../SEO/Seo";
import FourthButton from "../../../../../components/Buttons/Btn-4/FourthButton";
import  { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./SingleServiceRightImage.scss";
function SingleServiceRightImage({data}) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY;

      // You can adjust the scroll threshold as needed
      const threshold = 300;

      // Trigger animation when scroll position exceeds the threshold
      if (scrollY > threshold) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="single-service-right-container"
    >
      <div className="single-service-left-img">
        <img src={data.imgDataRight.img} />
      </div>
      <div className="single-service-right-data">
        <div className="single-service-right-title">
          <h1>{data.imgDataRight.title}</h1>
        </div>
        <div className="single-service-right-subtitle">
          <h2>{data.imgDataRight.subtitle}</h2>
        </div>
        <div className="single-service-right-desc">
          <p>{data.imgDataRight.desc}</p>
        </div>
        <div className="single-service-right-btn">
          <FourthButton title={"SEE OUR RESULTS"} link={"/contact"} />
        </div>
      </div>
    </motion.div>
  );
}

export default SingleServiceRightImage;
