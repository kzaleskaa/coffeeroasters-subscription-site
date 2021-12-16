import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import styles from "./Order.module.css";

const Order = (props) => {
  const [indexIsActive, setIndexIsActive] = useState(1);

  const changeActiveIndexHandler = (event) => {
    setIndexIsActive((prevState) =>
      prevState === Number(event.target.id) ? "" : Number(event.target.id)
    );
  };

  return (
    <>
      {props.data.map((item) => {
        return (
          <div key={item.id} className={styles.choice}>
            <div
              className={styles.question}
              id={item.id}
              onClick={changeActiveIndexHandler}
            >
              <h3 id={item.id}>{item.question}</h3>
              <div
                className={`${styles.arrow} ${
                  indexIsActive === item.id ? styles.show : ""
                }`}
                id={item.id}
              ></div>
            </div>
            <div
              className={`${styles.options} ${
                indexIsActive === item.id ? styles.show : ""
              }`}
            >
              {item.options.map((option) => (
                <div key={option.id} className={styles.option}>
                  <h4>{option.name}</h4>
                  <p>{option.about}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div className={styles.choice}></div>
      <button onClick={props.onShowModal}>Create my plan!</button>
    </>
  );
};

export default Order;
