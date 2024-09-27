import React, { useState } from "react";
import "../Stepper.css";

const StepperComponent = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];
  //  if n steps > n-1 lines
  const progressWidth = (100 / (stepsCount - 1)) * currentStep;

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        onClick={() => setCurrentStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}
      >
        {i + 1}
      </div>
    );
  }
  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const onNext = () => {
    if (currentStep !== list.length-1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <section className="stepper">
      <div className="steps-container">
        <div className="steps-wrapper">{steps}</div>
        <div
          className="progress-line"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      <div>{list[currentStep]}</div>
      <button onClick={onPrev} disabled={currentStep === 0 && true}>Prev</button>
      <button onClick={onNext} disabled={currentStep === list.length - 1 && true}> Next </button>
    </section>
  );
};

export default StepperComponent;
