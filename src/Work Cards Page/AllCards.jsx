import { HiArrowSmUp } from "react-icons/hi";
import FourthButton from "../components/Buttons/Btn-4/FourthButton";
import "./WorkCards.scss";
import { Link } from "react-router-dom";
function AllCards({ img, title, description, numbers, CardLink }) {
  return (
    <Link to={CardLink}>
      <div className="work-card-container">
        <div className="work-cards-img">
          <img src={img} />
        </div>
        <div className="work-cards-data">
          <div className="work-cards-title">
            <h1>{title}</h1>
            <Link className="work-link">
              How Practical Solution boosted {title} brand ROAS and
              decreased CPA significantly
            </Link>
          </div>
          <div className="work-cards-desc">
            <h3>Vision</h3>
            <p>{description}</p>
          </div>
          {/* <hr/> */}
          <div className="work-cards-numbers">
            <h3>Numbers Achieved</h3>
           <div className="work-numbers">
                <p>
                  Engagement : {numbers}
                  <HiArrowSmUp color="green"/>
                </p>
                <p>
                  Reach : {numbers}
                  <HiArrowSmUp color="green"/>
                </p>
                <p>
                  Sales : {numbers}
                  <HiArrowSmUp color="green"/>
                </p>
           </div>
          </div>
          <div className="work-cards-button">
            <FourthButton title={"Full Case Study"} link={CardLink} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AllCards;
