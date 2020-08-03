import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";
import paramFilter from "./paramFilter";
import stats from "./stats";

const reducer = combineReducers({
  aquariums,
  visibleAquarium,
  paramFilter,
  stats
});

export default reducer;
