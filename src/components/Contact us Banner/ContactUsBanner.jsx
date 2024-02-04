import FourthButton from '../Buttons/Btn-4/FourthButton';
import './ContactUsBanner.scss'
function ContactUsBanner() {
  return (
    <div className='contact-banner-section'>
      <div className='contact-banner-container'>
        <h1>
          Ready to kick off your
          <br /> growth journey? 🚀
        </h1>
        <FourthButton title={'TALK TO US'} link={'/contact'}/>
      </div>
    </div>
  );
}

export default ContactUsBanner