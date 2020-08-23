import { Aquarium } from "../models";
import { ActionTypes, ADD_AQUARIUM, ADD_AQUARIUM_DATA } from "../actions";

const aquarium = (state: Aquarium, action: ActionTypes) => {
  switch (action.type) {
    case ADD_AQUARIUM:
      return {
        id: action.id,
        size: action.payload.size,
        params: [],
      };
    case ADD_AQUARIUM_DATA:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        params: [...state.params, state.params.length],
      };
    default:
      return state;
  }
};

export default aquarium;
