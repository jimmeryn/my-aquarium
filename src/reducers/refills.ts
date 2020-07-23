import { combineReducers } from "redux";

import { State } from "../models";

const refillsById = () => {};

const allRefillsIds = () => {};

const refills = combineReducers({
  refillsById,
  allRefillsIds
});

const getAllRefills = (state: State) =>
  state.refills.allIds.map(id => state.refills.byId[id]);

export default refills;
