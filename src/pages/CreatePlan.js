import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Instruction from "../components/home/Instruction";
import Order from "../components/plan/Order";

import PlanHeader from "../components/plan/PlanHeader";
import Summary from "../components/plan/Summary";

import data from "../text-files/preferences.json";

const CreatePlan = () => {
  const [modalIsShow, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {modalIsShow && <Summary onCloseModal={hideModalHandler} />}
      <PlanHeader />
      <Instruction class="dark" />
      <Order onShowModal={showModalHandler} data={data.preferences} />
    </Fragment>
  );
};

export default CreatePlan;
