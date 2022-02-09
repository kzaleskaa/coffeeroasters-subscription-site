import styles from "./Details.module.css";

const Details = (props) => {
  return (
    <p
      id={props.item.id}
      onClick={props.changeActiveIndexHandler}
      className={props.indexIsActive === props.item.id && styles.active}
    >
      <span>0{props.item.id}</span> {props.item.preference}
    </p>
  );
};

export default Details;
