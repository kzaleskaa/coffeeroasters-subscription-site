import { Fragment } from "react/cjs/react.production.min";
import Modal from "../UI/Modal";

import styles from "./Summary.module.css";
import SummaryText from "./SummaryText";

const Summary = (props) => {

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <div className={styles["order-summary"]}>
        <h3>Order summary</h3>
      </div>
      <div className={styles.content}>
        <SummaryText />
        <p>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <button onClick={props.onCloseModal}>Checkout</button>
      </div>
    </Modal>
  );
};

export default Summary;
