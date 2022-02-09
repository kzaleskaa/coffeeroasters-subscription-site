import styles from "./SocialList.module.css";

const SocialList = () => {
  return (
    <ul className={styles.socials}>
      <li>
        <a href="/">
          <img src="assets/shared/desktop/icon-facebook.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src="assets/shared/desktop/icon-twitter.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="/">
          <img src="assets/shared/desktop/icon-instagram.svg" alt="" />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
