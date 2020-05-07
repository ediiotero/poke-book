import React from "react";
import "./Header.css";
import logo from "../images/pokemon-logo.png";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <img src={logo} alt="pokemon logo" id="poke-logo" />
        <a className="nes-btn" href="#">
          Saved Pokemon
        </a>
      </div>
    </header>
  );
}
