import React from "react";
import GameCell from "./component/GameCell";
import "./App.css";
import GameGrid from "./component/styled/GameGrid";
import { useStoreState } from "./store";
import TurnTracker from "./component/TurnTracker";

const App: React.FC = () => {
  const { cells, player, hasWon } = useStoreState(state => state.game);

  return (
    <div className="App">
      <header className="App-header">
        <TurnTracker player={player}></TurnTracker>
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
