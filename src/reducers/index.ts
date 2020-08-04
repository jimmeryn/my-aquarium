import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";
import paramFilter from "./paramFilter";
import graphLabels from "./graphLabels";

const reducer = combineReducers({
  aquariums,
  visibleAquarium,
  paramFilter,
  graphLabels
});

export default reducer;
