import styles from "./Headquarters.module.css";

const Headquarters = (props) => {
  return (
    <section className={styles.headquarters}>
      <h2>Our headquarters</h2>
      <div className={styles.items}>
        {props.address.map((address) => (
          <div key={address.key} className={styles.headquarter}>
            <img src={address.img} alt={address.country} />
            <h3>{address.country}</h3>
            <address>
              {address.street}
              <br />
              {address.city}
              <br />
              {address.postcode}
              <br />
              {address.phone}
              <br />
            </address>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Headquarters;
