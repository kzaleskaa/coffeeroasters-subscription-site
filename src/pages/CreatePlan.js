import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Instruction from "../components/home/Instruction";
import ChooseSection from "../components/plan/ChooseSection";
import Order from "../components/plan/Order";

import PlanHeader from "../components/plan/PlanHeader";
import Summary from "../components/plan/Summary";

const CreatePlan = () => {
  const [modalIsShow, setModalIsShown] = useState(true);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <>
      {modalIsShow && <Summary onCloseModal={hideModalHandler} />}
      <PlanHeader />
      <Instruction class="dark" />
      <ChooseSection />
      <Order onShowModal={showModalHandler} />
    </>
  );
};

export default CreatePlan;
