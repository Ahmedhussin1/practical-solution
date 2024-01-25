import './LandingPageCard.scss'
function LandingPageCard({title,subTitle,text}) {
  return (
    <div className="landing-page-card-container">
      <div className="header-subHeader">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      <div className="landing-page-span-container">
        {" "}
        <span></span>
      </div>
      <div className="landing-page-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default LandingPageCard