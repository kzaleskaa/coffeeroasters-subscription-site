import styles from "./Choose.module.css";

const Choose = (props) => {
  return (
    <section className={styles.choose}>
      <div className={styles.text}>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className={styles.reasons}>
        {props.data.map((reason) => (
          <div key={reason.key} className={styles.reason}>
            <img src={reason.img} alt={reason.name} />
            <div>
              <h3>{reason.name}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
