import { NavLink } from "react-router-dom";

import Container from "../layout/Container";

import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <Container class={styles["header-container"]}>
      <h1>Great coffee made simple.</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <NavLink to="/create-plan" className={styles["create-btn"]}>
        Create your plan
      </NavLink>
    </Container>
  );
};

export default HomeHeader;
