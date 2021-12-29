import ReactLogo from "../../assets/shared/desktop/logo.svg";

import { NavLink } from "react-router-dom";

import MainNavigation from "./MainNavigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={ReactLogo} alt="coffeeroasters" />
      </NavLink>
      <MainNavigation />
    </header>
  );
};

export default Header;
