import React, { useState, useEffect } from "react";
function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(preCount => preCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    document.title = "lol";
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
}
export default IntervalHookCounter;
