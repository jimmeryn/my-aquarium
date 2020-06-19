import { IData, ActionTypes } from "./types";
const initialState: IData = {
  aquariums: require("../data.json").aquariums
  // TODO: get normalized state
};

const reducer = (state: IData = initialState, action: ActionTypes): IData => {
  switch (action.type) {
    case 1:
      return state;
    default:
      return state;
  }
};

export default reducer;
