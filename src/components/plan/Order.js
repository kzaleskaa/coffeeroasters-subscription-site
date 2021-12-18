import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import styles from "./Order.module.css";
import Summary from "./Summary";
import SummaryText from "./SummaryText";

const Order = (props) => {
  const [indexIsActive, setIndexIsActive] = useState(1);
  const [chosenOptions, setChosenOptions] = useState([
    "Capsule",
    "Single origin",
    "250g",
    "Wholebean",
    "Every weeke",
  ]);

  const changeActiveIndexHandler = (event) => {
    setIndexIsActive((prevState) =>
      prevState === Number(event.target.id) ? "" : Number(event.target.id)
    );
  };

  function changeChoosenIndexHandler(event, index, name) {
    let newArray = [...chosenOptions];
    newArray[index] = name;
    setChosenOptions(newArray);
  }

  return (
    <>
      {props.data.map((item, index) => {
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
                <div
                  key={option.id}
                  id={option.id}
                  className={`${styles.option} ${
                    chosenOptions[index] === option.name
                      ? styles["choosen-option"]
                      : ""
                  }`}
                  onClick={(event) =>
                    changeChoosenIndexHandler(event, index, option.name)
                  }
                >
                  <h4>{option.name}</h4>
                  <p>{option.about}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <SummaryText />
      <button onClick={props.onShowModal}>Create my plan!</button>
    </>
  );
};

export default Order;
