import SingleServicePageHeader from '../Single service page components/Single service Header/SingleServicePageHeader'
import './Seo.scss'
import SEO from './Seo'
import ServicesImageSectionLeft from '../Single service page components/Left image section/ServicesImageSectionLeft'
import SingleServiceRightImage from '../Single service page components/Right image section/SingleServiceRightImage'
import SuccessfulClient from '../Single service page components/successful Clients section/SuccessfulClient'
import Tactics from '../Single service page components/Tactics Section/Tactics'
import FaqWithImage from '../Single service page components/Faq/Faq'
import ContactUsBanner from '../../../../components/Contact us Banner/ContactUsBanner';

function SeoPage() {
  return (
    <div className="seo-container">
      {/* header section */}
      <SingleServicePageHeader data={SEO} />
      {/* left image section */}
      <ServicesImageSectionLeft data={SEO} />
      {/* right image section */}
      <SingleServiceRightImage data={SEO} />
      {/* successful client section */}
      <SuccessfulClient data={SEO} />
      {/* tactics section */}
      <Tactics data={SEO} />
      {/* FAQ */}
      {/* <FaqWithImage data={SEO} /> */}
      <ContactUsBanner/>
    </div>
  );
}

export default SeoPage;