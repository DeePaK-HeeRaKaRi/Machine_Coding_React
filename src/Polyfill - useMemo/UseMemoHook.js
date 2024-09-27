import React, { useMemo, useState } from 'react'

import useCustomMemo from './UseMemoPolyfill'
const UseMemoHook = () => {
    const [counter,setCounter] = useState(0)
    const [counter2,setCounter2] = useState(100)

    const squaredValue = () => {
        console.log("Expensive Calculation")
        return  counter * counter;
    }

    // const memoizedSquaredValue = useMemo(squaredValue,[counter])

    const memoizedSquaredValue = useCustomMemo(squaredValue,[counter])
    // If the dependency changes then only the squaredValue will get fired
    // memoizedSquaredValue it returns a value not function

  return (
    <div>
         <h3>
            UseMemo is a react hook that lets you cache the result of calculation between rerenders
        </h3>
        <h3>
            So, When a component rerenders if there is so much expensive calculation we can cache that, We can save that
            so we dont have to calculate it again.
        </h3>
        UseMemoHook
        <h3>Counter : {counter}</h3>
        {/* <h3>Squared Count: {squaredValue()}</h3> */}
        <h3>Squared Count: {memoizedSquaredValue}</h3>
        <button onClick={() => setCounter(prev => prev+1)}>Increment Counter</button>
        <h3>---------------------------------------------------------</h3>
        <h3>Counter2 : {counter2}</h3>
        <button onClick={() => setCounter2(prev => prev-1)}>Decrement Counter</button> 
        {/* so when you click on the Decrement Counter , the squared value is also getting called. Due to when a state change
        the component will rerender again. For us squared value should not be called when we click on Decrement Count */}
    </div>
  )
}

export default UseMemoHook