import SectionOne from "./components/section-one/section-one";
import Stepper from "./components/stepper";


function StepOne(): JSX.Element {
  return (
    <>
      <header>
        <Stepper />
      </header>
      <SectionOne />
    </>
  );
};

export default StepOne;
