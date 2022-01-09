import { useContext } from "react";
import CartContext from "../../store/cart-context";

import styles from "./SummaryText.module.css";

const SummaryText = () => {
  const cartCtx = useContext(CartContext);

  const details = cartCtx.details;

  return (
    <p className={styles.order}>
      “I drink my coffee as <span>{details[0].name}</span>, with a{" "}
      <span>{details[1].name} </span>
      type of bean. <span>{details[2].name} </span> ground ala{" "}
      <span>{details[3].name}</span>, sent to me <span>{details[4].name}</span>
      .”
    </p>
  );
};

export default SummaryText;
