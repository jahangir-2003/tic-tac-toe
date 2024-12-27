import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/">Counter</Link>
      <Link to="/list">List</Link>
    </>
  );
};

export default Navigation;
