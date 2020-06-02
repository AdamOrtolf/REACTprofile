import React from "react";
import './App.css';
import NavBar from "./components/NavBar"
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <header>
    
      <NavBar />
      </header>
      <Switch>
      <Home path="/" component={Home} />

    
      </Switch>
    </Router>
  );
}

export default App;
