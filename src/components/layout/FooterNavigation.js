import { NavLink } from "react-router-dom";

import styles from "./FooterNavigation.module.css";

const FooterNavigation = () => {
  return (
    <ul className={styles["footer-nav"]}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/create-plan">Create Plan</NavLink>
      </li>
    </ul>
  );
};

export default FooterNavigation;
