import styles from "./Option.module.css";
import OptionDetails from "./OptionDetails";

const Option = (props) => {
  const {
    item,
    changeActiveIndexHandler,
    indexIsActive,
    changeChoosenIndexHandler,
    chosenOptions,
    index,
  } = props;

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
          <OptionDetails
            option={option}
            item={item}
            chosenOptions={chosenOptions}
            index={index}
            changeChoosenIndexHandler={changeChoosenIndexHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Option;
