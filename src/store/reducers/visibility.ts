import { ActionTypes, SET_VISIBILITY } from "../types";

const visibility = (state = null, action: ActionTypes) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.id;
    default:
      return state;
  }
};

export default visibility;
