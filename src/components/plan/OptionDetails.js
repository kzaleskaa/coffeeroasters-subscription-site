import styles from "./OptionDetails.module.css";

const OptionDetails = (props) => {
  const { option, item, chosenOptions, index, changeChoosenIndexHandler } =
    props;

  return (
    <div
      key={option.id}
      id={option.id}
      details={{
        preference: item.id,
        id: option.id,
        name: option.name,
      }}
      className={`${styles.option} ${
        chosenOptions[index] === option.name ? styles.choice : ""
      }`}
      onClick={(event) =>
        changeChoosenIndexHandler(event, {
          preference: item.id,
          id: option.id,
          name: option.name,
        })
      }
    >
      <h4>{option.name}</h4>
      <p>{option.about}</p>
    </div>
  );
};

export default OptionDetails;
