import { ActionTypes, CHANGE_PARAM_FILTER } from "../actions/actionTypes";

const paramFilter = (state = "refills", action: ActionTypes) => {
  switch (action.type) {
    case CHANGE_PARAM_FILTER:
      return state !== action.filter ? action.filter : state;
    default:
      return state;
  }
};

export default paramFilter;
