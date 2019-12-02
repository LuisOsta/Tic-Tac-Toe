import React from "react";
import GameCell from "./component/GameCell";
import "./App.css";
import GameGrid from "./component/styled/GameGrid";
import { useStoreState } from "./store";

const App: React.FC = () => {
  const { cells, player, hasWon } = useStoreState(state => state.game);

  const currentPlayer: string = player === 1 ? "O" : "X";
  return (
    <div className="App">
      <header className="App-header">
        <h1>The current player is: {currentPlayer}</h1>
        {hasWon === true ? (
          <h1>The player has won</h1>
        ) : (
          <GameGrid>
            {cells.map((cell, index) => {
              return (
                <GameCell cell={cell} index={index} key={`${cell}-${index}`} />
              );
            })}
          </GameGrid>
        )}
      </header>
    </div>
  );
};

export default App;
