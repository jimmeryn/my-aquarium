import { UIActionTypes, SET_DIALOG_STATE } from "../actions";

const dialog = (state = false, action: UIActionTypes) => {
  switch (action.type) {
    case SET_DIALOG_STATE:
      return !state;
    default:
      return state;
  }
};

export default dialog;
