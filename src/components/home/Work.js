import { NavLink } from "react-router-dom";
import Instruction from "./Instruction";

import styles from "./Work.module.css";

const Work = () => {
  return (
    <section className={styles.work}>
      <h2>How it works</h2>
      <Instruction />
      <NavLink to="/create-plan" className={styles["create-btn"]}>
        Create your plan
      </NavLink>
    </section>
  );
};

export default Work;
