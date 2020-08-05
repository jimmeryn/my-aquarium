import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";
import paramFilter from "./paramFilter";
import graphLabels from "./graphLabels";
import menu from "./menu";

const reducer = combineReducers({
  aquariums,
  visibleAquarium,
  paramFilter,
  graphLabels,
  menu
});

export default reducer;
