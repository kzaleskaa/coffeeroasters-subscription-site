import { NavLink } from "react-router-dom";

const Work = (props) => {
  return (
    <section>
      <h2>How it works?</h2>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        {props.data.map((step) => {
          return (
            <div key={step.key}>
              <span>{step.number}</span>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
      <NavLink to="/create-plan">Create your plan</NavLink>
    </section>
  );
};

export default Work;
