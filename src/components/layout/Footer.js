import logo from "../../assets/shared/desktop/logo-footer.svg";
import FooterNavigation from "./FooterNavigation";
import SocialList from "./SocialList";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" />
      <FooterNavigation />
      <SocialList />
    </footer>
  );
};

export default Footer;
