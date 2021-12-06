import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div>
      <h1>Great coffee made simple</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <NavLink to="/create-plan">Create your plan</NavLink>
    </div>
  );
};

export default HomeHeader;
