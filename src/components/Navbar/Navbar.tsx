import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>memory</h1>
      <div className="navbar-buttons">
        <button className="restart-button">Restart</button>
        <Link to="/">
          <button className="new-game-button">New Game</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
