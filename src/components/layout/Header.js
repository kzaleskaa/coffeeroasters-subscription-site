import ReactLogo from "../../assets/shared/desktop/logo.svg";

import MainNavigation from "../UI/MainNavigation";

import styles from "./Header.module.css";

import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className={styles.header}>
      <img src={ReactLogo} alt="coffeeroasters" />
      <input
        id="dropdown"
        className="input-box"
        type="checkbox"
        onChange={mobileMenuHandler}
      />
      <label htmlFor="dropdown" className="dropdown">
        <img src={showMobileMenu ? close : hamburger} alt="" />
      </label>
      {showMobileMenu && <MainNavigation />}
    </header>
  );
};

export default Header;
