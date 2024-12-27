import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./Chapters/Tic-Tac-game/Game";
import MockUp from "./Chapters/ReadJson/Mockup";
import Navigation from "./Components/Navigation";
import BasicJsHome from "./Chapters/BasicReact/BasicJsHome";

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<BasicJsHome />} />
      <Route path="/tic-tac-toe" element={<Game />} />
      <Route path="/mock-up" element={<MockUp />} />
    </Routes>
  </>
);

export default App;
