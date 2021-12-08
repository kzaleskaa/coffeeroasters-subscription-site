import { Fragment } from "react/cjs/react.production.min";
import ChooseSection from "../components/plan/ChooseSection";
import Instruction from "../components/plan/Instruction";
import Order from "../components/plan/Order";

import PlanHeader from "../components/plan/PlanHeader";

const CreatePlan = () => {
  return (
    <>
      <PlanHeader />
      <Instruction />
      <ChooseSection />
      <Order />
    </>
  );
};

export default CreatePlan;
