import { motion } from "framer-motion";
import { useRef,useState,useEffect } from "react";
import images from "../assets/images";
import './Slider.css'

function Slider() {
    const [width, setWidth]=useState(0);
    const carousel = useRef();
    useEffect(() =>{
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
    },[]);
  return (
    <div>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div className="inner-carousel" 
        drag="x" dragConstraints={{right:0, left:-width-200}}>
          {images.map((img, index) => (
            <motion.div key={index} className="item">
              <img src={img} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider