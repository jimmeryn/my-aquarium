import { ActionTypes, ADD_AQUARIUM, ADD_AQUARIUM_DATA, State } from "../types";

import normalize from "./normalize";
import { combineReducers } from "redux";
import aquarium from "./aquarium";

const initialState: State = normalize(require("../../data.json"));

console.log(initialState);

const aquariumsById = (
  state: State = initialState,
  action: ActionTypes
): State => {
  switch (action.type) {
    case ADD_AQUARIUM_DATA:
    case ADD_AQUARIUM:
      return {
        ...state,
        [action.id]: aquarium(state.aquariums.byId[action.id], action)
      };
    default:
      return state;
  }
};

// TODO: REDUCERS + ACTIONS
// for single objects: aquarium, param, refill
// and for whole objects/arrays: byId, allId
// one should make shure that we use certain deeper reducer for one object
// see also: Dan Abramov talk about redux + normalizing redux state
const allAquariumsIds = (state: number[], action: ActionTypes) => {
  switch (action.type) {
    case ADD_AQUARIUM:
      // return [...state, action.id];
      return null;
    default:
      // return state;
      return null;
  }
};

const reducer = combineReducers({ aquariumsById, allAquariumsIds });

export default reducer;
