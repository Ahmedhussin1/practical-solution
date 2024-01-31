import './SingleServicePageHeader.scss'
import FourthButton from '../../../../../components/Buttons/Btn-4/FourthButton';
function SingleServicePageHeader({data}) {
  return (
    <div>
      <div className="single-service-page-header">
        <div className="single-service-page-header-title">
          <h1>{data.header.title}</h1>
        </div>
        <div className="single-service-page-header-desc">
          <p>
            {data.header.desc}
          </p>
        </div>
        <div className="single-service-page-header-btn">
          {/* <SixButton title={"EXPLORE"} link={"#"} /> */}
          <FourthButton title={"EXPLORE"} link={data.header.btnLink} />
        </div>
      </div>
    </div>
  );
}

export default SingleServicePageHeader