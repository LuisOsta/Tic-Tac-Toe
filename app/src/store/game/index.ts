import { GameModel, Player } from './types'
import { updateGameCells, onGameUpdate } from "./actions";

const game: GameModel = {
  cells: new Array<number>(9).fill(0),
  player: Player.O,
  hasWon: false,
  updateGameCells,
  onGameUpdate
};

export * from './types'
export default game;
