import Modal from "../UI/Modal";

import styles from "./Summary.module.css";

const Summary = (props) => {
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <div className={styles["order-summary"]}>
        <h3>Order summary</h3>
      </div>
      <div className={styles.content}>
        <p className={styles.order}>
          “I drink my coffee as <span>Filter</span>, with a <span>Decaf </span>
          type of bean. <span>250g</span> ground ala <span>Cafetiére</span>,
          sent to me <span>Every Week</span>.”
        </p>
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
