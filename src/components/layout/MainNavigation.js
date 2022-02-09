import { NavLink } from "react-router-dom";

import { useState } from "react";

import styles from "./MainNavigation.module.css";

import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

const MainNavigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  document.body.style.maxHeight = showMobileMenu ? "100vh" : "auto";
  document.body.style.overflowY = showMobileMenu ? "hidden" : "auto";

  return (
    <nav className={styles.nav}>
      <label htmlFor="dropdown" className={`dropdown ${styles.mobile}`}>
        <img src={showMobileMenu ? close : hamburger} alt="" />
      </label>
      <input
        id="dropdown"
        className="input-box"
        type="checkbox"
        checked={showMobileMenu}
        onChange={() => setShowMobileMenu(!showMobileMenu)}
      />
      <ul>
        <li>
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-plan"
            className={(navData) => (navData.isActive ? styles.active : "")}
            onClick={() => setShowMobileMenu(false)}
          >
            Create Plan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
