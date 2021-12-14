import styles from "./Instruction.module.css";

import data from "../../text-files/text-home.json";

const Instruction = (props) => {
  console.log(props.class);
  return (
    <div className={`${styles.instruction} ${props.class ? styles.dark : ""}`}>
      <div className={styles.decoration}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.steps}>
        {[...data.steps].map((step) => {
          return (
            <div key={step.key} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instruction;
