import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full items-center`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-48 min-w-28 h-16 m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-48 w-20 object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
