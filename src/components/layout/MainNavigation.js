import { NavLink } from "react-router-dom";

import { useState } from "react";

import styles from "./MainNavigation.module.css";

import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

const MainNavigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className={styles.nav}>
      <label htmlFor="dropdown" className={`dropdown ${styles.mobile}`}>
        <img src={showMobileMenu ? close : hamburger} alt="" />
      </label>
      <input
        id="dropdown"
        className="input-box"
        type="checkbox"
        onChange={mobileMenuHandler}
      />
      <ul>
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
            Create Plan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
