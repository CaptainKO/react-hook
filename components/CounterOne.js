import React, { useReducer } from "react";

const init = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return init;
    default:
      return state;
  }
  return newState;
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <h2> Count: {count} </h2>
    </div>
  );
}

export default CounterOne;
