import React from "react";

const MyButton = ({ title, setCount, disable }) => {
  return (
    <button className="btn" onClick={setCount} disabled={disable}>
      {title}
    </button>
  );
};

export default MyButton;
