import styles from "./HeaderTemplate.module.css";

const HeaderTemplate = (props) => {
  return (
    <div className={`${styles["header-template"]} ${props.class}`}>
      {props.children}
    </div>
  );
};

export default HeaderTemplate;
