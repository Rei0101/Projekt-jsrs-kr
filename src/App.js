import React from "react";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Prva from "./Components/Prva.js";
import Druga from "./Components/Druga.js";
import Treca from "./Components/Treca.js";
import Cetvrta from "./Components/Cetvrta.js";
import Peta from "./Components/Peta.js";
import LoginContextProvider from "./Context/LoginContext";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Header></Header>

        <Router>
          <Route exact path="/" component={Prva}></Route>
          <Route path="/druga" component={Druga}></Route>
          <Route path="/treca" component={Treca}></Route>
          <Route path="/cetvrta" component={Cetvrta}></Route>
          <Route path="/peta" component={Peta}></Route>
        </Router>

        <Footer></Footer>
      </LoginContextProvider>
    </div>
  );
}

export default App;
