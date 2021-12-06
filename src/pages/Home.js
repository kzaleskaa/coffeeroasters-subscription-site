import { Fragment } from "react/cjs/react.production.min";

import HomeHeader from "../components/home/HomeHeader";
import Collection from "../components/home/Collection";
import Choose from "../components/home/Choose";
import Work from "../components/home/Work";

import data from "../text-home.json";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Collection data={data.collection} />
      <Choose data={data.reasons} />
      <Work data={data.steps} />
    </>
  );
};

export default Home;
