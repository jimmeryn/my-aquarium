import { combineReducers } from "redux";
import { State } from "../models";
import normalize from "../api/normalize";

const dataFromJson = normalize(require("../data.json")).parameters;

const paramsById = () => {};

const allParamsIds = () => {};

const params = combineReducers({
  paramsById,
  allParamsIds
});

const getAllParams = (state: State) =>
  state.parameters.allIds.map(id => state.parameters.byId[id]);

export default params;
