import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map(({ id, title, value }) => (
      <div
        key={id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="text-white font-poppins font-semibold sm:text-4xl text-3xl">
          {value}
        </h4>
        <p className="text-gradient font-poppins font-normal sm:text-xl text-sm uppercase ml-3">
          {title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
