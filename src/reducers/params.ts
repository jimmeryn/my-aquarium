import { Param, NormalizedObject } from "../models";
import { ActionTypes, ADD_AQUARIUM_DATA } from "../actions";
import normalize from "./normalize";
import { combineReducers } from "redux";

let dataFromJson: NormalizedObject<Param>;
try {
  dataFromJson = normalize(require("../store/data.json")).params;
} catch (e) {
  dataFromJson = { byId: {}, allIds: [] };
}

const allParamsIds = (
  state: number[] = dataFromJson.allIds,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_AQUARIUM_DATA:
      return [...state, state[state.length - 1] + 1];
    default:
      return state;
  }
};

const paramsById = (
  state: { [id: number]: Param } = dataFromJson.byId,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_AQUARIUM_DATA:
      return {
        ...(state[action.payload.paramId] = {
          id: action.payload.paramId,
          aquariumId: action.id,
          date: action.payload.date,
          value: action.payload.value,
          name: action.payload.name
        })
      };
    default:
      return state;
  }
};

const params = combineReducers({
  byId: paramsById,
  allIds: allParamsIds
});

export default params;
