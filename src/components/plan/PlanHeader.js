import Container from "../layout/Container";

import styles from "./PlanHeader.module.css";

const PlanHeader = () => {
  return (
    <Container class={styles["plan-container"]}>
      <h1>Create a plan</h1>
      <p>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </p>
    </Container>
  );
};

export default PlanHeader;
