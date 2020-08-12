import {
  UIActionTypes,
  SET_DIALOG_STATE,
  DialogVariant,
  HIDDEN
} from "../actions";

const dialog = (state: DialogVariant = HIDDEN, action: UIActionTypes) => {
  switch (action.type) {
    case SET_DIALOG_STATE:
      return state !== action.variant && action.variant
        ? action.variant
        : HIDDEN;
    default:
      return state;
  }
};

export default dialog;
