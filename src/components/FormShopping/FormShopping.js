import React from "react";

import "./FormShopping.scss";
import BtnShopping from "../BtnShopping";

import InputsStep3 from "../InputsStep3";

function FormShopping({ ...routeProps }) {
  // console.log(routeProps);
  const activeStepURL = routeProps.match.path;
  const activeStep = parseInt(
    activeStepURL.substring(activeStepURL.length - 1, activeStepURL.length),
    activeStepURL.length,
  );
  // const [currentActive, setCurrentActive] = useState(1);
  return (
    <form>
      {/* <div>Step1</div>
      <div>Step2</div>
      <div>Step3</div>
      <div>Step4</div> */}
      {activeStep === 3 && (
        <>
          <InputsStep3 activeStep={activeStep} />
          <BtnShopping />
        </>
      )}
      {/* <BtnShopping /> */}
    </form>
  );
}

export default FormShopping;
