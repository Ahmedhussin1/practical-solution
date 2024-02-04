import FourthButton from "../../components/Buttons/Btn-4/FourthButton";
import Testimonials from "../About/About Page Component/Testimonials";
import TestimonialsData from "../About/About Page Component/Testimonials";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact-page-container">
      <div className="contact-header-form">
        <div className="contact-header">
          <h1>GET IN TOUCH NOW !!</h1>
          <p>Our Team will get back to you as fast as possible </p>
        </div>
        <div className="contact-page-form">
          <div className="form-left">
            <h1>
              Ready to meet your
              <br />
              Practical Solution partner
            </h1>
            <p>
              We seek lasting relationships to help our clients unlock rapid
              growth at efficient economics. Tell us where you are and where you
              want to be.
            </p>
            <span>We'll help you get there</span>
          </div>
          <form action="#" method="post" id="contact_form">
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              />
            </div>
            <div className="telephone">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                <option disabled hidden selected>
                  Subject line
                </option>
                <option>I'd like to start a project</option>
                <option>I'd like to ask a question</option>
                <option>I'd like to make a proposal</option>
              </select>
            </div>
            <div className="message">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="submit">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
          {/* <form>
            <title>Name</title>
            <input type="text" placeholder="Full Name"></input>
            <title>Company Email</title>
            <input type="email" placeholder="info@example.com"></input>
            <title>Phone</title>
            <input type="number" placeholder="Your phone Number"></input>
            <title>Your Message</title>
            <input type="text" placeholder="write your message here"></input>
            <button>submit</button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
