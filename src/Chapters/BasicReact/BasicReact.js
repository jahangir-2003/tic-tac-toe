import React, { useState } from "react";
import MyButton from "./Components/MyButton";
import Profile from "./Profile";
import Lists from "./Lists";

const BasicReact = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>This is counter page</h2>
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
    </>
  );
};

export default BasicReact;
