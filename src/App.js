import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
