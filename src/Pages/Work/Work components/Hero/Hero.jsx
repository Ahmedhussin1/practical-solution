import "./Hero.scss";
function Hero({img, title, description}) {
  return (
    <div className="hero-container">
      <div className="client-hero">
        {/* client logo */}
        <div className="client-logo">
          <img src={img} />
        </div>
        {/* client name */}
        <div className="client-name">
          <h1>{title}</h1>
        </div>
        {/* client desc */}
        <div className="client-desc">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
