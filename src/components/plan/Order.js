import { useContext } from "react";
import CartContext from "../../store/cart-context";

import { useState } from "react";

import styles from "./Order.module.css";
import SummaryText from "./SummaryText";
import Details from "./Details";
import Option from "./Option";

const Order = (props) => {
  const cartCtx = useContext(CartContext);

  const [indexIsActive, setIndexIsActive] = useState(1);

  const chosenOptions = cartCtx.details.map((item) => item.name);

  const changeActiveIndexHandler = (event) => {
    setIndexIsActive((prevState) =>
      prevState === Number(event.target.id) ? "" : Number(event.target.id)
    );
  };

  function changeChoosenIndexHandler(event, details) {
    cartCtx.updateDetail(details);
  }

  console.log(cartCtx.details);

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        {props.data.map((item) => (
          <Details
            item={item}
            changeActiveIndexHandler={changeActiveIndexHandler}
            indexIsActive={indexIsActive}
          />
        ))}
      </div>
      <div>
        {props.data.map((item, index) => {
          return (
            <Option
              item={item}
              index={index}
              changeActiveIndexHandler={changeActiveIndexHandler}
              indexIsActive={indexIsActive}
              chosenOptions={chosenOptions}
              changeChoosenIndexHandler={changeChoosenIndexHandler}
            />
          );
        })}
        <div className={styles["order-summary"]}>
          <h3>Order summary</h3>
          <SummaryText class={styles["summary-text"]} />
        </div>
        <button className={styles["btn-create"]} onClick={props.onShowModal}>
          Create my plan!
        </button>
      </div>
    </div>
  );
};

export default Order;
