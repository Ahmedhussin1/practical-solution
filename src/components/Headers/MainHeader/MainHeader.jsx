import './MainHeader.scss'
import FourthButton from '../../Buttons/Btn-4/FourthButton';
import {IoMdArrowDropright} from 'react-icons/io'
function MainHeader({number,header ,title,link}) {
  return (
    <div className="section-divider">
      <div className="title-section">
        <div>
          <p>{number}</p>
          <p>{title}</p>
        </div>
        <h1>{header}</h1>
      </div>
      <div className="arrow-section">
        <FourthButton title={<IoMdArrowDropright />} link={link} />
      </div>
    </div>
  );
}

export default MainHeader