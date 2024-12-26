import React, { useState } from "react";
import BasicReact from "./pages/BasicReact";
import Game from "./Tic_Tac_Toe/Game";

const App = () => {
  const [basic, setBasic] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        style={{
          width: 150,
          height: 50,
          color: "magenta",
          fontWeight: "bold",
          fontSize: 15,
          marginBlock: 20,
          cursor: "pointer",
        }}
        onClick={() => setBasic(!basic)}
      >
        Switch page
      </button>
      {basic ? <BasicReact /> : <Game />}
    </div>
  );
};

export default App;
