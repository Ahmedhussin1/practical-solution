import './Testimonial.scss'
import Testimonial from './Tistimoial'
function Testimonials({testimonialData}) {
  return (
    <div>
      <h1 className="section-header">Deemed SoGood<br/> by our partners</h1>
      <p className="section-desc">
        65% of our clients doubled their revenue in the first 6 months.<br/> But
        don’t hear it from us; hear it from them.
      </p>
      <div className="testimonial-section-container">
        {testimonialData.map((testimonial, index) => (
          <Testimonial
            key={index}
            img={testimonial.img}
            title={testimonial.title}
            desc={testimonial.desc}
            authorName={testimonial.authorName}
            authorPosition={testimonial.authorPosition}
            link={testimonial.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials