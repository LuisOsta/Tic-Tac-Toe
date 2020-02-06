import { Action, action, actionOn, ActionOn } from "easy-peasy";
import { GameModel, Player } from './types'
import { hasPlayerWon } from "../../game/win";


/**
 * @summary
 * @param {GameModel} state -
 * @param {number} payload
 */
export const updateGameCells: Action<GameModel, number> = action((state, payload) => {
    const { cells, player } = state;
    const index: number = payload;
    const newValue: Player = player;
    // update the game cells
    const newCells = cells.map((value, i) => (i === index ? newValue : value));

    state.cells = newCells;
});


/**
 * @summary - The listener will be attached to the updateGameCells action.
 * It will then retrieve the update cells, the player who made the move and the index of the move.
 * It will then determine whether that player made a winning move, if so it will update hasWon otherwise
 * It will update the current player accordingly(X to O / O to X)
 */
export const onGameUpdate: ActionOn<GameModel> = actionOn(actions => actions.updateGameCells, (state, target) => {
    const {cells, player} = state;
    const index:number = target.payload;

    if(hasPlayerWon(cells, player, index)) {
        state.hasWon = true
    } else {
        state.player = getNewPlayer(player);
    }
})

/**
 * @summary It will return the appropriate new player based on the current player.
 * Using the enum object defined in types to determine the comparison
 * @param  {number} currentPlayer - It will equal Player.O or Player.X (-1 or 1)
 */
const getNewPlayer: Function = (currentPlayer: number) => {
    const newPlayer: number = currentPlayer === Player.O ? Player.X : Player.O;

    return newPlayer;
};