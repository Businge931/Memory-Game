import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { setGridBySix, setGridByFour } from "../../store/Settings/setGridSlice";

const Home = () => {
  const [activeButton, setActiveButton] = useState({
    activeButton: null as any,
    themes: [
      { id: 1, theme: "Numbers" },
      { id: 2, theme: "Icons" },
    ],
  });
  const [players, setPlayers] = useState({
    players: null as any,
    playerNumber: [
      { id: 1, number: 1 },
      { id: 2, number: 2 },
      { id: 3, number: 3 },
      { id: 4, number: 4 },
    ],
  });

  const [grid, setGrid] = useState({
    grid: null as any,
    grids: [
      { id: 1, grid: "4x4" },
      { id: 2, grid: "6x6" },
    ],
  });

  // const dispatch = useAppDispatch();
  // const grid = useAppSelector((state) => state.chooseGrid.gridArray);
  // console.log(grid);

  const toggleTheme = (index: number) => {
    setActiveButton({
      ...activeButton,
      activeButton: activeButton.themes[index],
    });
  };
  const togglePlayers = (index: number) => {
    setPlayers({
      ...players,
      players: players.playerNumber[index],
    });
  };
  const toggleGrid = (index: number) => {
    setGrid({
      ...grid,
      grid: grid.grids[index],
    });
  };

  const toggleThemeStyles = (index: number) => {
    if (activeButton.themes[index] === activeButton.activeButton) {
      return "button activeStyles";
    } else {
      return "button ";
    }
  };
  const togglePlayerStyles = (index: number) => {
    if (players.playerNumber[index] === players.players) {
      return "button activeStyles";
    } else {
      return "button ";
    }
  };
  const toggleGridStyles = (index: number) => {
    if (grid.grids[index] === grid.grid) {
      return "button activeStyles";
    } else {
      return "button ";
    }
  };

  // const setGridFourHandler = () => {
  //   dispatch(setGridByFour());
  // };
  // const setGridSixHandler = () => {
  //   dispatch(setGridBySix());
  // };

  return (
    <div className="home">
      <h1 className="home-heading">memory</h1>
      <div className="home-buttons section-margin">
        <div className="home-buttons_theme">
          <h4 className="button-heading">Select Theme</h4>
          <div className="theme-buttons">
            {activeButton.themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => {
                  toggleTheme(index);
                }}
                className={toggleThemeStyles(index)}
              >
                {theme.theme}
              </button>
            ))}
          </div>
        </div>

        <div className="home-buttons_players">
          <h4 className="button-heading">Number of Players</h4>
          <div className="player-buttons">
            {players.playerNumber.map((players, index) => (
              <button
                key={index}
                onClick={() => {
                  togglePlayers(index);
                }}
                className={togglePlayerStyles(index)}
              >
                {players.number}
              </button>
            ))}
          </div>
        </div>

        <div className="home-buttons_grid-size">
          <h4 className="button-heading">Grid Size </h4>
          <div className="grid-size-buttons">
            {grid.grids.map((grid, index) => (
              <button
                key={index}
                onClick={() => {
                  toggleGrid(index);
                }}
                className={toggleGridStyles(index)}
              >
                {grid.grid}
              </button>
            ))}
          </div>
        </div>
        <Link to="gamescreen">
          <button className="start-game-button">Start Game</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
