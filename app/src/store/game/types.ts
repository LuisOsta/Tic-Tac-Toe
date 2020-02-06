import { Action, ActionOn } from "easy-peasy";

export enum Player {
    O = 1,
    X = -1
}

/**
 * ! Research Into Computed Values For HasWon
 */
export interface GameModel {
    cells: Array<number>;
    player: Player;
    hasWon: boolean;
    updateGameCells: Action<GameModel, number>;
    onGameUpdate: ActionOn<GameModel>
}