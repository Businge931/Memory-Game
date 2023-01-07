import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import GameScreen from "./containers/GameScreen/GameScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamescreen" element={<GameScreen />} />
    </Routes>
  );
}

export default App;
