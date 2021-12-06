import { Fragment } from "react/cjs/react.production.min";

import AboutHeader from "../components/about/AboutHeader";
import Commitment from "../components/about/Commitment";
import Quality from "../components/about/Quality";
import Headquarters from "../components/about/Headquarters";

import data from "../text-files/headquarters.json";

const About = () => {
  return (
    <>
      <AboutHeader />
      <Commitment />
      <Quality />
      <Headquarters address={data.headquarters} />
    </>
  );
};

export default About;
