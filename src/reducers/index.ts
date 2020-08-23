import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";
import paramFilter from "./paramFilter";
import graphLabels from "./graphLabels";
import userInterface from "./userInterface";
import params from "./params";

const reducer = combineReducers({
  aquariums,
  params,
  visibleAquarium,
  paramFilter,
  graphLabels,
  userInterface,
});

export default reducer;
