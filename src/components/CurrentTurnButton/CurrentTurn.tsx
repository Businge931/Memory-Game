import React from "react";
// import "../Button/Button.css";
// import "./CurrentTurn.css";

type props = {
  playerNumber: number;
  moves: number;
  active?: any;
};

const CurrentTurn = ({ playerNumber, moves, active }: props) => {
  return (
    <div className="button-container">
      <button className={`button ${active}`}>
        Player {playerNumber} <span>{moves}</span>
      </button>
      <p>Current Turn</p>
    </div>
  );
};

export default CurrentTurn;
