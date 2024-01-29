import Hero from "./Work components/Hero/Hero"
import WorkData from "./WorkData"
import Numbers from "./Work components/Numbers/Numbers";
import AboutCompany from "./About us/AboutCompany";
import Objectives from "./Objectives/Objectives";
import Challenges from "./Challenges/Challenges";
import './Work.scss'
import WorkServices from "./Services Provided/WorkServices";
import WorkCarousel from "./WorkCarousel/WorkCarousel";
function Work() {
  const specificObject = WorkData.find(item => item.title === 'RIMINI');

  return (
    <div>
      {/* hero section */}
      <Hero
        img={specificObject.img}
        title={specificObject.title}
        description={specificObject.description}
      />
      {/* numbers */}
      <Numbers />
      {/* carousel */}
      <div className="carousel-container">
        <WorkCarousel />
      </div>
      {/* word about us */}
      <AboutCompany />
      {/* objectives */}
      <Objectives />
      {/* challenges faced */}
      <Challenges />
      <div className="divider-container">
        {" "}
        <hr className="work-section-divider" />
      </div>
      {/* services provided */}
      <WorkServices />
      {/* approaches  */}
      {/* content marketing */}
    </div>
  );
}

export default Work