import {
  UIActionTypes,
  SET_DIALOG_STATE,
  HIDDEN,
  DialogState,
} from "../actions";

const dialog = (
  state: DialogState = { variant: HIDDEN, aquariumId: -1 },
  action: UIActionTypes
) => {
  switch (action.type) {
    case SET_DIALOG_STATE:
      return state.variant !== action.variant && action.variant
        ? { variant: action.variant, aquariumId: action.aquariumId }
        : { variant: HIDDEN, aquariumId: -1 };
    default:
      return state;
  }
};

export default dialog;
