import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Tile from "../../components/Tile/Tile";
import "./GameScreen.css";
// import CurrentTurn from "../../components/CurrentTurnButton/CurrentTurn";

const GameScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="tiles">
        <Tile />
      </div>
      <div className="current-turn">
        {/* <CurrentTurn playerNumber={1} moves={4} />
        <CurrentTurn playerNumber={2} moves={5} />
        <CurrentTurn playerNumber={3} moves={2} />
        <CurrentTurn playerNumber={4} moves={0} /> */}
      </div>
    </div>
  );
};

export default GameScreen;
