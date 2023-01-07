import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>memory</h1>
      <div className="navbar-buttons">
        <button className="restart-button">Restart</button>
        <button className="new-game-button">New Game</button>
      </div>
    </nav>
  );
};

export default Navbar;
