import React, { useState } from "react";
import "./App.css";
import Home from "./components/HomePage";
import Inicio from "./components/Inicio";

function App() {
  const [inicio, setInicio] = useState(true);
  return inicio ? (
    <Inicio setInicio={setInicio} />
  ) : (
    <Home setInicio={setInicio} />
  );
}

export default App;
