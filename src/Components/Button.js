import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        marginBlock: 5,
        width: 120,
        height: 40,
        cursor: "pointer",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
