import {
  ActionTypes,
  ADD_AQUARIUM,
  ADD_AQUARIUM_DATA,
  Aquarium
} from "../types";

const aquarium = (state: Aquarium, action: ActionTypes) => {
  switch (action.type) {
    case ADD_AQUARIUM:
      return {
        id: action.id,
        size: action.payload.size,
        data: [],
        waterRefills: []
      };
    case ADD_AQUARIUM_DATA:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        data: [...state.data, action.payload.newData]
      };
    default:
      return state;
  }
};

export default aquarium;
