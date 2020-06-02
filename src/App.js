import React from "react";
import './App.css';
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <header>
    
      <NavBar />
      </header>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />

    
      </Switch>
    </Router>
  );
}

export default App;
