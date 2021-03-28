import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CNavBar from "./components/Navbar"
import Gallery from "./components/Gallery"
import React from 'react';

function App() {
  return (
    <Router>
      <header>
        <CNavBar></CNavBar>
      </header>
      <Route exact path="/">
      </Route>
      <Route exact path="/Gallery">
        <Gallery />
      </Route>
    </Router>

  );
}

export default App;
