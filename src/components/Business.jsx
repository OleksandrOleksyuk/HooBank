import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import PropTypes from "prop-types";

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles={"mt-10 bg-blue-gradient"}>GetStarted</Button>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex p-6 rounded-2xl ${
      features.length - 1 !== index ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-dimWhite text-lg mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-normal">
        {content}
      </p>
    </div>
  </div>
);
FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Business;
