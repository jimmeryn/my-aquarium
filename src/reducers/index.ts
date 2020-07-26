import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";
import paramFilter from "./paramFilter";

const reducer = combineReducers({ aquariums, visibleAquarium, paramFilter });

export default reducer;
