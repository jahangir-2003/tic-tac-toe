import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      style={{
        width: 60,
        height: 60,
        fontSize: 20,
      }}
      // disabled={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
