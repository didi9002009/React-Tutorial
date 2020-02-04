import React, { useState, useMemo } from "react";

function Counter({ text, count }) {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  // callback fn cache the fn instance iteself, whereas useMemo invoke the fn and cache the result of the fn
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) i++; // i<2000000000 error
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? " Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}
export default Counter;
