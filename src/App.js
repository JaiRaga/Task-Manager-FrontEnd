import React from "react";
import "./App.css";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/layout/Dashboard";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Landing /> */}
      <Dashboard />
    </div>
  );
}

export default App;
