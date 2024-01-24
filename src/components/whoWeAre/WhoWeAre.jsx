import './WhoWeAre.scss'
import { motion } from 'framer-motion';

function WhoWeAre() {
  return (
    <motion.div
      className="who-we-are-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="who-we-are-heading"
      >
        <h1>Ambitious Minds, Exceptional Results</h1>
        <p>
          At the heart of Practical Solution, you'll find a collective ambition
          that drives us to explore the limitless possibilities of digital
          marketing. We thrive on challenges, constantly pushing boundaries to
          deliver results that surpass expectations.
        </p>
        <h2>Expert Team Collaboration</h2>
        <p>
          Our team is our greatest asset. Comprising skilled graphic designers,
          savvy media buyers, and innovative web developers, we come together to
          form a powerhouse dedicated to elevating your brand. With diverse
          talents and a shared commitment to excellence, we craft strategies
          that resonate with your audience and leave a lasting impact.
        </p>
      </motion.div>

      <div className="who-we-are-break">
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="what-we-do-container"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="what-we-do-section"
        >
          <h4>Strategic Marketing Solutions</h4>
          <p>
            In the ever-evolving landscape of digital marketing, we stand as
            your strategic partner. Our tailored marketing solutions are
            designed to captivate your audience, drive engagement, and convert
            leads into loyal customers. From meticulous market analysis to
            trendsetting campaigns, we navigate the digital realm with finesse.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="what-we-do-section"
        >
          <h4>E-Commerce Excellence</h4>
          <p>
            Elevate your online presence with our comprehensive e-commerce
            solutions. Whether you're launching a new store or optimizing an
            existing one, our team leverages industry insights and cutting-edge
            technologies to create seamless, user-friendly experiences that turn
            browsers into buyers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="what-we-do-section"
        >
          <h4>Social Media Mastery</h4>
          <p>
            Your brand's voice deserves to be heard. We specialize in creating
            compelling social media narratives that resonate with your audience.
            From content creation to community management, we are adept at
            turning your social media platforms into vibrant hubs that foster
            engagement and brand loyalty.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WhoWeAre