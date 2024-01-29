import './AboutCompany.scss';
function AboutCompany() {
  return (
    <div className="about-com">
      <div className="about-com-header">
        <div className="circle-container">
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <div className="about-com-title">
          <h1>
            Practical Solution <br />
            is a strategic and insightful partner.
          </h1>
        </div>
        <div className="circle-container">
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>

      <div className="about-com-desc">
        <p>
          Practical solution has been optimized to give your visitors the best
          experience in terms of UX/UI, with a unique design to deliver all
          layouts.With over a decade of experience, we’ve established ourselves
          as one of the pioneering agencies in the region. Our small, flexible,
          agile and design-led structures and processes allow us to highly
          responsive and innovative.
        </p>
      </div>

      <div className="about-com-word">
        <h3>Jasmine W.</h3>
        <p>Director of Growth Marketing</p>
      </div>
    </div>
  );
}

export default AboutCompany