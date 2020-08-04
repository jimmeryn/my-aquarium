import { Aquarium } from "../models";
import { ActionTypes, ADD_AQUARIUM, ADD_AQUARIUM_DATA } from "../actions";

const aquarium = (aquariumState: Aquarium, action: ActionTypes) => {
  switch (action.type) {
    case ADD_AQUARIUM:
      return {
        id: action.id,
        size: action.payload.size,
        params: []
      };
    case ADD_AQUARIUM_DATA:
      if (aquariumState.id !== action.id) {
        return aquariumState;
      }
      return {
        ...aquariumState,
        data: [...aquariumState.params, action.payload.newData]
      };
    default:
      return aquariumState;
  }
};

export default aquarium;
