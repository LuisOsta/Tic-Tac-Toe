import game, { GameModel } from "./game";
import { createStore, createTypedHooks } from "easy-peasy";

export interface StoreModel {
  game: GameModel;
}

const model: StoreModel = {
  game
};

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
export const useStoreDispatch = typedHooks.useStoreDispatch;

export default createStore(model);
