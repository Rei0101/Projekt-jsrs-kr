import React, { useContext } from "react";
import "./App.css";
import { LoginContext } from "./Context/LoginContext";

function Header() {
  const { jeUlogiran, toggleLogin } = useContext(LoginContext);
  return (
    <div className="header">
      <h1 className="keanu">Keanu Reeves</h1>
      <p style={{ float: "left" }}>
        {jeUlogiran ? "Ulogirani ste" : "Niste ulogirani"}
      </p>
      <h6 className="madeby">Rei Krstić, g2p</h6>
    </div>
  );
}

export default Header;
