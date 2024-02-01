import ContactUsBanner from '../../components/Contact us Banner/ContactUsBanner';
import MainHeader from '../../components/Headers/MainHeader/MainHeader';
import OffersCard from './Offers Components/Offers cards/OffersCard';
import OffersCards from './Offers Components/Offers cards/Offerscards';
import offersData from './OffersData';
import './OffersPage.scss'
function OffersPage() {
  return (
    <div className="offers-page-container">
      <div className="offers-hero-section">
        <div className="offers-hero-section-span">
          {" "}
          <span></span>
        </div>
        <div className="offers-hero-section-header">
          <h1>
            What We
            <br />
            Do
          </h1>
        </div>
        <div className="offers-hero-section-text">
          <p>
            Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
            JAMES OLIVE
          </p>
        </div>
      </div>
      <hr className="horizontal-line" />
      {/* header section divider */}
      <MainHeader
        number={"01"}
        title={"Brand Marketing"}
        header={"Strategic planning"}
      />
      {/* first cards section */}
      <hr className="horizontal-line" />
      <OffersCards cardData={offersData.firstSection} />
      {/* header section divider */}
      <MainHeader
        number={"02"}
        title={"Digital Experience"}
        header={"Platform integration"}
      />
      <hr className="horizontal-line" />
      <OffersCards cardData={offersData.secondSection} />
      <MainHeader
        number={"03"}
        title={"Data Science"}
        header={"Data platforms"}
      />
      <hr className="horizontal-line" />
      <OffersCards cardData={offersData.firstSection} />

      <hr className="horizontal-line" />
      <ContactUsBanner />
      <hr className="horizontal-line" />
    </div>
  );
}

export default OffersPage