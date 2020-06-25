import { createStore, combineReducers } from "redux";
import reducer from "./data/reducers/reducers";

const rootReducer = combineReducers({
  reducer
});

export type State = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer);
}
