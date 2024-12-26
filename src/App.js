import React, { useState } from "react";
import MyButton from "./Components/MyButton";

const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h2>This is home page and for counter</h2>
      <MyButton
        title={"increase"}
        count={count}
        setCount={increase}
        disable={false}
      />
      <h2>{count}</h2>
      <MyButton
        title={"decrease"}
        count={count}
        setCount={decrease}
        disable={count === 0 ? true : false}
      />
    </div>
  );
};

export default App;
