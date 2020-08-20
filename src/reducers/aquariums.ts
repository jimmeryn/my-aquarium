import { combineReducers } from "redux";
import { Aquarium, NormalizedObject } from "../models";
import { ActionTypes, ADD_AQUARIUM, ADD_AQUARIUM_DATA } from "../actions";
import normalize from "./normalize";
import aquarium from "./aquarium";

let dataFromJson: NormalizedObject<Aquarium>;
try {
  dataFromJson = normalize(require("../store/data.json")).aquariums;
} catch (e) {
  dataFromJson = { byId: {}, allIds: [] };
}

const allaquariumsIds = (
  state: number[] = dataFromJson.allIds,
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
  state: { [id: number]: Aquarium } = dataFromJson.byId,
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

// mapping aquariums by it's id to aquariums array
const getAllAquariums = (state: State) =>
  state.aquariums.allIds.map(id => state.aquariums.byId[id]);

export default aquariums;
