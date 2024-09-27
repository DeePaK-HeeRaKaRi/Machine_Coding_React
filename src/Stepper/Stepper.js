import React from 'react'
import StepperComponent from './Component/StepperComponent'
import "./Stepper.css"

const Stepper = () => {
    const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];
  return (
    <>
      <div>
        <StepperComponent list={list} />
      </div>
    </>
  );
}

export default Stepper
// It will accept a list of components
// based on size of list
// it will generate steps

const Example1 = () => {
    return <h1>Hello1</h1>
}

const Example2 = () => {
  return <h1>Hello2</h1>;
};
const Example3 = () => {
  return <h1>Hello3</h1>;
};
const Example4 = () => {
  return <h1>Hello4</h1>;
};
const Example5 = () => {
  return <h1>Hello5</h1>;
};