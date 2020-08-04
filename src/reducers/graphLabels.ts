import { GraphActionTypes, ADD_GRAPH_DATA, SHOW_ON_GRAPH } from "../actions";

const initialState: string[] = [];

const graphLabels = (state = initialState, action: GraphActionTypes) => {
  switch (action.type) {
    case ADD_GRAPH_DATA:
      if (state.indexOf(action.label) === -1) {
        return state.length < 2
          ? [...state, action.label]
          : [state[state.length - 1], action.label];
      }
      return state;
    case SHOW_ON_GRAPH:
      return [action.label];
    default:
      return state;
  }
};

export default graphLabels;
