import { createStore } from "redux";
import reducer from "./reducers";

export type State = ReturnType<typeof reducer>;

export default function configureStore() {
  return createStore(reducer);
}
