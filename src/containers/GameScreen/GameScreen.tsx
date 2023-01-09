import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Tile from "../../components/Tile/Tile";
import "./GameScreen.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

// import CurrentTurn from "../../components/CurrentTurnButton/CurrentTurn";

const GameScreen = () => {
  let grid = useAppSelector((state) => state.chooseGrid.gridArray);
  // console.log(grid);

  return (
    <div>
      <Navbar />
      <div className="tiles">
        {grid.map((tile, index) => (
          <Tile key={index} />
        ))}
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
