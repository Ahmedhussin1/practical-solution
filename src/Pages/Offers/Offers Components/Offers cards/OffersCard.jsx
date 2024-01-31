import './OffersCard.scss'
import { FaCheck } from "react-icons/fa";

function OffersCard({title,desc}) {
  return (
    <div className="offer-card-section">
      <div className="offer-card-container">
        <div className="offer-card-left-section">
          <div>
            <h1>{title}</h1>
            <p>
              {desc}
            </p>
          </div>
        </div>

        <div className="offer-card-right-section">
          <div>
            <ul>
              <li>
                <FaCheck />
                Marketing Research
              </li>
              <li>
                <FaCheck />
                Messaging
              </li>
              <li>
                <FaCheck />
                Positioning
              </li>
              <li>
                <FaCheck />
                Persona/Segmentation
              </li>
              <li>
                <FaCheck />
                Portfolio Architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersCard