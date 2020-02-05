import { Action, action } from "easy-peasy";
import { hasPlayerWon } from "../game/win";

const initial = new Array<number>(9).fill(0);
enum Player {
  O = 1,
  X = -1
}
export interface GameModel {
  cells: Array<number>;
  player: Player;
  hasWon: boolean;
  updateGameCells: Action<GameModel, number>;
}

const updateGameCells: Action<GameModel, number> = action((state, payload) => {
  const { cells, player } = state;
  const index = payload;
  const newCell: Player = player;
  // update the game cells
  const newCells = cells.map((value, i) => (i === index ? newCell : value));

  state.cells = newCells;
  if (hasPlayerWon(newCells, player, index)) {
    state.hasWon = true;
  } else {
    state.player = getNewPlayer(player);
  }
});

const getNewPlayer: Function = (currentPlayer: number) => {
  const newPlayer: number = currentPlayer === Player.O ? Player.X : Player.O;

  return newPlayer;
};

const game: GameModel = {
  cells: initial,
  player: Player.O,
  hasWon: false,
  updateGameCells
};

export default game;
