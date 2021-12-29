import styles from "./Collection.module.css";

const Collection = (props) => {
  return (
    <section className={styles.collection}>
      <h2>our collection</h2>
      <div className={styles.products}>
        {props.data.map((product) => (
          <div key={product.key} className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div className={styles.text}>
              <h3>{product.name}</h3>
              <p>{product.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
