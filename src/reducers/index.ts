import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";
import paramFilter from "./paramFilter";
import graphLabels from "./graphLabels";
import userInterface from "./userInterface";

const reducer = combineReducers({
  aquariums,
  visibleAquarium,
  paramFilter,
  graphLabels,
  userInterface
});

export default reducer;
