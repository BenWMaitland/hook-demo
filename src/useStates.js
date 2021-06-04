import React, { useState } from "react";
import { Button } from '@material-ui/core';

export default function UseStates(props) {
  // useStates should always go at the top of a function, not in a return statement or a sub-function
  const [counterOne, setCounterOne] = useState(1); // set the useState to a const of an array, since it is never modified directly - only with the setter (second index in the array)
  const [counterTwo, setCounterTwo] = useState(2); // useState(2) means the initial value is 2. Not passing an initial value can cause errors. Use an empty array if needed

  const decrementCounterOne = () => {
    setCounterOne(curr => curr - 1); // For setters that reference their own value, use a parameter to grab the live value
    setCounterOne(curr => curr - 1);
    // This function would not decrease twice if this syntax were used instead: 
    // setCounterOne(counterOne - 1);
    // setCounterOne(counterOne - 1);
  }

  return (
    <div style={{ fontSize: 40 }}>
      {/* passing a named function prevents the setter from being called on the first render */}
      <Button onClick={decrementCounterOne} style={{ fontSize: 40 }}>-</Button>
      {counterOne}
      {/* Passing a lambda expression prevents the setter from being called on the first render without needing a named function */}
      <Button onClick={() => { setCounterOne(counterOne + 1) }} style={{ fontSize: 40 }}>+</Button>

      <Button onClick={() => { setCounterTwo(counterTwo - 1) }} style={{ fontSize: 40 }}>-</Button>
      {counterTwo}
      <Button onClick={() => { setCounterTwo(counterTwo + 1) }} style={{ fontSize: 40 }}>+</Button>
    </div>
  );
}
