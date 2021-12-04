import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <li>
        <NavLink
          to="/"
          className={(isActive) => "nav-link" + (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={(isActive) => "nav-link" + (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-plan"
          className={(isActive) => "nav-link" + (isActive ? "active" : "")}
        >
          CreatePlan
        </NavLink>
      </li>
    </nav>
  );
};

export default MainNavigation;
