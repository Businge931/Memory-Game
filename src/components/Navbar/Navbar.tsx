import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { setTheme } from "../../store/Settings/setThemeSlice";
// import { setPlayerNumber } from "../../store/Settings/setPlayerNumberSlice";
// import { setGridSize } from "../../store/Settings/setGridSlice";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Navbar = ({ shuffleCards }: any) => {
  // const dispatch = useAppDispatch();
  // const theme = useAppSelector((state) => state.theme.themeName);
  // const gridSize = useAppSelector((state) => state.chooseGrid.gridSize);
  // const player = useAppSelector((state) => state.players.players);
  // console.log(theme);
  // console.log(gridSize);
  // console.log(player);

  const newGame = () => {
    // dispatch(setTheme(null)); //check these
    // dispatch(setPlayerNumber(0)); //check these
    // dispatch(setGridSize([])); //check these
  };

  return (
    <nav className="navbar">
      <h1>memory</h1>
      <div className="navbar-buttons">
        <button className="restart-button" onClick={shuffleCards}>
          Restart
        </button>
        <Link to="/">
          <button className="new-game-button" onClick={newGame}>
            New Game
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
