import ReactLogo from "../../assets/shared/desktop/logo.svg";

import MainNavigation from "../UI/MainNavigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={ReactLogo} alt="coffeeroasters" />
      <MainNavigation />
    </header>
  );
};

export default Header;
