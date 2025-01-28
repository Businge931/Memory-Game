import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Tile from "../../components/Tile/Tile";
import "./GameScreen.css";
import { useAppSelector } from "../../store/hooks";

import { generateNumbers } from "../../utils/randomNumbers";
import { Icons } from "../../utils/icons";
import { IconTypes } from "../../utils/icons";


const GameScreen = () => {
  const grid = useAppSelector((state) => state.chooseGrid.gridArray);

  const [cards, setCards] = useState<IconTypes[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledIcons = [...Icons, ...Icons]
      .sort(() => Math.random() - 0.5)
      .map((icon) => ({ ...icon, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledIcons);
    setTurns(0);
  };
  //handle choice
  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  //reset choices and increase turn by 1
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  //compare the two choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevIcon) => {
          return prevIcon.map((icon) => {
            if (icon.src === choiceOne.src) {
              return { ...icon, matched: true };
            } else {
              return icon;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //start new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <Navbar shuffleCards={shuffleCards} />
      <div className="tiles">
        {grid.map((tile, index) => (
          <Tile
            key={index}
            handleChoice={handleChoice}
            disabled={disabled}
            tile={tile}
          />
        ))}
      </div>

      <div className="current-turn">
        <p>Turns: {turns}</p>

        {/* <CurrentTurn playerNumber={1} moves={4} />
        <CurrentTurn playerNumber={2} moves={5} />
        <CurrentTurn playerNumber={3} moves={2} />
        <CurrentTurn playerNumber={4} moves={0} /> */}
      </div>
    </div>
  );
};

export default GameScreen;
