import { combineReducers } from "redux";
import aquariums from "./aquariums";
import visibleAquarium from "./visibleAquarium";

const reducer = combineReducers({ aquariums, visibleAquarium });

export default reducer;
