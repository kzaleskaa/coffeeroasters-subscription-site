import logo from "../../assets/shared/desktop/logo-footer.svg";
import MainNavigation from "../UI/MainNavigation";
import SocialList from "../UI/SocialList";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" />
      <MainNavigation />
      <SocialList />
    </footer>
  );
};

export default Footer;
