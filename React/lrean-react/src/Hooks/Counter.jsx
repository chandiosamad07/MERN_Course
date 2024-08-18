import React, { useState } from "react";

const CounterH = () => {
  const [count, setCount] = useState(0);
  const Inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };


  return (
    <>
      <button onClick={Inc}>Inc</button>
      <h1> {count}</h1>
      <button onClick={dec}>Dec</button>

    </>
  );
};

export default CounterH;
