import "./FirstCard.scss";
import FirstButton from "../../Buttons/Btn-1/FirstButton";
const FirstCard = ({ img, title, text, btn, btnLink }) => {
  return (
    <div className="first-card">
      <div className="img">
        <img src={img} />
      </div>

      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
        <FirstButton title={btn} link={btnLink} />
      </div>
    </div>
  );
};

export default FirstCard;
