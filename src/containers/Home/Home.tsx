import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import "./Home.css";
import Button from "../../components/Button/Button";
import { generateNumbers } from "../../utils/randomNumbers";
import { setActiveButton } from "../../store/activeButtonSlice";

const Home = () => {
  // const buttonActive = useAppSelector((state) => state.activeButton.isActive);
  const dispatch = useAppDispatch();

  const manageTheme = () => {
    dispatch(setActiveButton());
    generateNumbers(8);
  };

  return (
    <div className="home">
      <h1 className="home-heading">memory</h1>
      <div className="home-buttons section-margin">
        <div className="home-buttons_theme">
          <h4 className="button-heading">Select Theme</h4>
          <div className="theme-buttons">
            <Button onClick={manageTheme}>Numbers</Button>
            <Button onClick={() => {}}>Icons</Button>
          </div>
        </div>

        <div className="home-buttons_players">
          <h4 className="button-heading">Number of Players</h4>
          <div className="player-buttons">
            <Button onClick={() => {}}>1</Button>
            <Button onClick={() => {}}>2</Button>
            <Button onClick={() => {}}>3</Button>
            <Button onClick={() => {}}>4</Button>
          </div>
        </div>

        <div className="home-buttons_grid-size">
          <h4 className="button-heading">Grid Size </h4>
          <div className="grid-size-buttons">
            <Button onClick={() => {}}>4x4</Button>
            <Button onClick={() => {}}>6x6</Button>
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
