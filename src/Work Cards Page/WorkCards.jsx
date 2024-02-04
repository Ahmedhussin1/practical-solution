import ContactUsBanner from "../components/Contact us Banner/ContactUsBanner";
import AllCards from "./AllCards";
import "./WorkCards.scss";
import WorkCardData from "./WorkCardsData";
function WorkCards() {
  return (
    <div className="all-work-cards-container">
      <h1 className="all-work-page-title">Our Successful Clients</h1>

      <div className="work-cards-grid">
        {WorkCardData.map((data, index) => (
          <AllCards
            key={index}
            img={data.img}
            title={data.title}
            description={data.description}
            numbers={data.Number}
            CardLink={data.cardLink}
          />
        ))}
      </div>
      <ContactUsBanner/>
    </div>
  );
}

export default WorkCards;
