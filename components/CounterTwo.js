import React, { useReducer } from "react";

const initState = {
  firstCounter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initState;
    default:
      return state;
  }
  return newState;
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h2> Count: {count.firstCounter} </h2>
    </div>
  );
}

export default CounterTwo;
