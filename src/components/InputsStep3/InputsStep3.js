import React from "react";
import "./InputsStep3.scss";

function InputsStep3({ activeStep }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Payment details</h4>
        <h5>Steps {activeStep} of 3</h5>
      </div>
      <hr />
      <p>How would you like to pay?</p>
      <div className="d-flex justify-content-between">
        <div className="radio">
          <label htmlFor="cdCard">
            Credit&Debit Card
            <input id="cdCard" type="radio" />
          </label>
        </div>
        <div className="radio">
          <input type="radio" />
          Credit&Debit Card
        </div>
        <div className="radio">
          <input type="radio" />
          Credit&Debit Card
        </div>
      </div>
    </>
  );
}

export default InputsStep3;
