import { UIActionTypes, SET_MENU_STATE } from "../actions";

const menu = (state = false, action: UIActionTypes) => {
  switch (action.type) {
    case SET_MENU_STATE:
      return !state;
    default:
      return state;
  }
};

export default menu;
