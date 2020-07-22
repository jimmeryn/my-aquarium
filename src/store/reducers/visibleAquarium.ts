import { ActionTypes, SET_VISIBLE_AQUARIUM } from "../types/actionTypes";

const visibleAquarium = (state: number = -1, action: ActionTypes) => {
  switch (action.type) {
    case SET_VISIBLE_AQUARIUM:
      return action.id;
    default:
      return state;
  }
};

export default visibleAquarium;
