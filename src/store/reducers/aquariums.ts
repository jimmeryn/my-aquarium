import {
  ActionTypes,
  ADD_AQUARIUM,
  ADD_AQUARIUM_DATA,
  Aquarium
} from "../types/types";
import { combineReducers } from "redux";

import normalize from "./normalize";
import { State } from "../types/types";
import aquarium from "./aquarium";

const dataFromJson = normalize(require("../data.json"));
console.log(dataFromJson);
const allaquariumsIds = (
  state: number[] = dataFromJson.aquariums.allIds,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_AQUARIUM:
      return [...state, action.id];
    default:
      return state;
  }
};

const aquariumsById = (
  state: { [id: number]: Aquarium } = dataFromJson.aquariums.byId,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_AQUARIUM:
    case ADD_AQUARIUM_DATA:
      return {
        ...state,
        [action.id]: aquarium(state[action.id], action)
      };
    default:
      return state;
  }
};

const aquariums = combineReducers({
  aquariumsById,
  allaquariumsIds
});

const getAllAquariums = (state: State) =>
  state.aquariums.allIds.map(id => state.aquariums.byId[id]);

export default aquariums;
