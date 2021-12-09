const DUMMY_STEPS = [
  {
    number: "01",
    name: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    name: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    name: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const Instruction = () => {
  return (
    <div>
      {DUMMY_STEPS.map((step) => (
        <div key={step.number}>
          <span>{step.number}</span>
          <h3>{step.name}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Instruction;
