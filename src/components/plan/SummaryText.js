import styles from "./SummaryText.module.css";

const SummaryText = () => {
  return (
    <p className={styles.order}>
      “I drink my coffee as <span>Filter</span>, with a <span>Decaf </span>
      type of bean. <span>250g</span> ground ala <span>Cafetiére</span>, sent to
      me <span>Every Week</span>.”
    </p>
  );
};

export default SummaryText;
