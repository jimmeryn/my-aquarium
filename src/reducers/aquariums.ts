import { combineReducers } from "redux";
import { Aquarium, NormalizedObject } from "../models";
import { ActionTypes, ADD_AQUARIUM, ADD_AQUARIUM_DATA } from "../actions";
import normalize from "./normalize";
import aquarium from "./aquarium";

let defaultState: NormalizedObject<Aquarium> = { byId: {}, allIds: [] };

try {
  defaultState = normalize(require("../../db.json")).aquariums;
} catch (error) {
  console.error(error);
}

const allaquariumsIds = (
  state: number[] = defaultState.allIds,
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
  state: { [id: number]: Aquarium } = defaultState.byId,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_AQUARIUM:
    case ADD_AQUARIUM_DATA:
      return {
        ...state,
        [action.id]: aquarium(state[action.id], action),
      };
    default:
      return state;
  }
};

const aquariums = combineReducers({
  byId: aquariumsById,
  allIds: allaquariumsIds,
});

export default aquariums;
