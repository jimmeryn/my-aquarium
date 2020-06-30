import {
  ActionTypes,
  ADD_AQUARIUM,
  ADD_AQUARIUM_DATA,
  Aquarium
} from "../types/types";
import { combineReducers } from "redux";

function addAquarium(state: number[] = [], action: ActionTypes) {
  return state.concat();
}

const allaquariumsIds = (state: number[] = [], action: ActionTypes) => {
  switch (action.type) {
    case ADD_AQUARIUM:
      return addAquarium(state, action);
    case ADD_AQUARIUM_DATA:
      return state;
    default:
      return state;
  }
};

const aquariumsById = (
  state: { [id: number]: Aquarium } = {},
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_AQUARIUM:
    case ADD_AQUARIUM_DATA:
    default:
      return state;
  }
};

const aquariums = combineReducers({
  aquariumsById,
  allaquariumsIds
});

export default aquariums;
