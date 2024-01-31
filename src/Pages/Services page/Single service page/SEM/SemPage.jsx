import './SemPage.scss'
import SemData from './SemData'
import SingleServicePageHeader from '../Single service page components/Single service Header/SingleServicePageHeader';
import ServicesImageSectionLeft from '../Single service page components/Left image section/ServicesImageSectionLeft';
import SingleServiceRightImage from '../Single service page components/Right image section/SingleServiceRightImage';
import SuccessfulClient from '../Single service page components/successful Clients section/SuccessfulClient';
import Tactics from '../Single service page components/Tactics Section/Tactics';
import FaqWithImage from '../Single service page components/Faq/Faq';
import ContactUsBanner from '../../../../components/Contact us Banner/ContactUsBanner';
function SemPage() {
  return (
    <div className='sem-container'>
      {/* header section */}
      <SingleServicePageHeader data={SemData} />
      {/* left image section */}
      <ServicesImageSectionLeft data={SemData} />
      {/* right image section */}
      <SingleServiceRightImage data={SemData} />
      {/* successful client section */}
      <SuccessfulClient data={SemData} />
      {/* tactics section */}
      <Tactics data={SemData} />
      {/* FAQ */}
      {/* <FaqWithImage data={SemData} /> */}
      <ContactUsBanner/>
    </div>
  );
}

export default SemPage