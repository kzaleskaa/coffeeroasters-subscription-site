import { NavLink } from "react-router-dom";

// className={isActive =>
//     "nav-link" + (!isActive ? " unselected" : "")
//   }

const MainNavigation = () => {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/create-plan">CreatePlan</NavLink>
      </li>
    </nav>
  );
};

export default MainNavigation;