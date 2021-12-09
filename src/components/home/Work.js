import { NavLink } from "react-router-dom";

import styles from "./Work.module.css";

const Work = (props) => {
  return (
    <section className={styles.work}>
      <h2>How it works</h2>
      <div className={styles.decoration}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.steps}>
        {props.data.map((step) => {
          return (
            <div key={step.key} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
      <NavLink to="/create-plan" className={styles["create-btn"]}>
        Create your plan
      </NavLink>
    </section>
  );
};

export default Work;
