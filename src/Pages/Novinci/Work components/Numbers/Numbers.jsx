import { HiArrowSmUp } from "react-icons/hi";
import './Numbers.scss'

function Numbers() {
  return (
    <div className='client-number-section'>
      <div className="client-numbers-container">
        <div className="client-number-data">
          <span>
            <HiArrowSmUp className="arrow-icon" />
            370
          </span>
          <h3>Organic Traffic</h3>
        </div>

        <div className="client-number-data">
          <span>
            <HiArrowSmUp className="arrow-icon" />
            69%
          </span>
          <h3>Sign Up Rate</h3>
        </div>

        <div className="client-number-data">
          <span>
            <HiArrowSmUp className="arrow-icon" />
            3x
          </span>
          <h3>Keyword Rankings</h3>
        </div>
      </div>
    </div>
  );
}

export default Numbers