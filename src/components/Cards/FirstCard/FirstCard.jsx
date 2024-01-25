import "./FirstCard.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FirstButton from "../../Buttons/Btn-1/FirstButton";
import FourthButton from "../../Buttons/Btn-4/FourthButton";
import Btn from "../../Buttons/Btn-5/Btn";
const FirstCard = ({ img, title, text, btn, btnLink }) => {
  return (
    <motion.div
        className="first-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
      >
        <div className="img">
          <img src={img} />
        </div>

        <div className="text">
          <h1>{title}</h1>
          <p>{text}</p>
          <FirstButton title={btn}/>
        </div>
      </motion.div>
  );
};

export default FirstCard;
