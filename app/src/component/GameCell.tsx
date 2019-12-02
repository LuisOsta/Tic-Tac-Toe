import React from "react";
import GameCellGrid from "./styled/GameCellGrid";
import GameIcon from "./styled/GameIcon";
import { useStoreActions } from "../store";

interface GCProps {
  cell: number;
  index: number;
}
const GameCell: React.FC<GCProps> = ({ cell, index }: GCProps) => {
  const updateGame = useStoreActions(actions => actions.game.updateGameCells);
  const onClick = (): void => {
    try {
      if (cell !== 0) {
        return;
      }
      updateGame(index);
    } catch (error) {
      console.error(
        `An error occured while clicking on the game cell: ${error}`
      );
    }
  };
  return (
    <GameCellGrid
      container
      item
      xs={4}
      onClick={onClick}
      disabled={cell !== 0}
      position={index}
      direction="column"
    >
      <GameIcon cell={cell} />
    </GameCellGrid>
  );
};

export default GameCell;
