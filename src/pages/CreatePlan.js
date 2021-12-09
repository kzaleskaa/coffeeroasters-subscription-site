import { Fragment } from "react/cjs/react.production.min";
import Instruction from "../components/home/Instruction";
import ChooseSection from "../components/plan/ChooseSection";
import Order from "../components/plan/Order";

import PlanHeader from "../components/plan/PlanHeader";

const CreatePlan = () => {
  return (
    <>
      <PlanHeader />
      <Instruction class="dark" />
      <ChooseSection />
      <Order />
    </>
  );
};

export default CreatePlan;
