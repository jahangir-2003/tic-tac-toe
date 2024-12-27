import React, { useState } from "react";
import BasicReact from "./BasicReact";
import Lists from "./Lists";
import Profile from "./Profile";

const BasicJsHome = () => {
  const [page, setPage] = useState("counter");

  const handleClick = (pageName) => {
    setPage(pageName);
  };

  let pageContent;

  switch (page) {
    case "counter":
      pageContent = <BasicReact />;
      break;
    case "list":
      pageContent = <Lists />;
      break;
    case "profile":
      pageContent = <Profile />;
      break;
    default:
      pageContent = <BasicReact />;
      break;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => handleClick("counter")}>Counter</button>
        <button onClick={() => handleClick("list")}>List</button>
        <button onClick={() => handleClick("profile")}>Profile</button>
      </div>

      <div style={{ marginTop: 20, textAlign: "center" }}>{pageContent}</div>
    </>
  );
};

export default BasicJsHome;
