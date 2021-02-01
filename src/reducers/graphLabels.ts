import { GraphActionTypes, ADD_GRAPH_DATA, SHOW_ON_GRAPH } from "../actions";

const initialState: { refills: boolean; params: string[] } = {
  refills: false,
  params: [],
};

const graphLabels = (state = initialState, action: GraphActionTypes) => {
  switch (action.type) {
    case ADD_GRAPH_DATA:
      if (state.params.indexOf(action.label) === -1) {
        return state.params.length < 2
          ? { ...state, params: [...state.params, action.label] }
          : {
              ...state,
              params: [state.params[1], action.label],
            };
      }
      return state;
    case SHOW_ON_GRAPH:
      return { ...state, params: [action.label] };
    default:
      return state;
  }
};

export default graphLabels;
