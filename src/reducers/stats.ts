import {
  GraphActionTypes,
  ADD_GRAPH_DATA,
  SHOW_ON_GRAPH
} from "../actions/actionTypes";

interface graphState {
  labels: string[];
  data: number[][];
  dates: string[];
}

const initialGraphState: graphState = {
  labels: [],
  data: [],
  dates: []
};

const stats = (state = initialGraphState, action: GraphActionTypes) => {
  switch (action.type) {
    case ADD_GRAPH_DATA:
      if (state.labels.length < 2) {
        return {
          labels: [...state.labels, action.label],
          data: [...state.data, action.data],
          dates: action.dates
        };
      }
      return {
        labels: [state.labels[state.labels.length - 1], action.label],
        data: [state.data[state.data.length - 1], action.data],
        dates: action.dates
      };
    case SHOW_ON_GRAPH:
      return {
        labels: [action.label],
        data: [action.data],
        dates: action.dates
      };
    default:
      return state;
  }
};

export default stats;
