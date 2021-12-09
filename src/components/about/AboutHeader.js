import Container from "../layout/Container";

import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  return (
    <Container class={styles["about-container"]}>
      <h1>About us</h1>
      <p>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </Container>
  );
};

export default AboutHeader;
