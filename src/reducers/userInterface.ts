import { combineReducers } from "redux";
import menu from "./menu";
import dialog from "./dialog";

const userInterface = combineReducers({
  menu,
  dialog,
});

export default userInterface;
