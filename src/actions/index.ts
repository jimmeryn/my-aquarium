import { Param } from "../models";

// Describing different ACTION NAMES available
export const ADD_AQUARIUM = "ADD_AQUARIUM";
export const ADD_AQUARIUM_DATA = "ADD_AQUARIUM_DATA";
export const SET_VISIBLE_AQUARIUM = "SET_VISIBLE_AQUARIUM";
export const CHANGE_PARAM_FILTER = "CHANGE_PARAM_FILTER";
export const ADD_GRAPH_DATA = "ADD_GRAPH_DATA";
export const SHOW_ON_GRAPH = "SHOW_ON_GRAPH";

interface AddAquarium {
  readonly type: typeof ADD_AQUARIUM;
  id: number;
  payload: {
    size: number;
    name?: string;
  };
}

interface AddAquariumData {
  readonly type: typeof ADD_AQUARIUM_DATA;
  id: number;
  payload: {
    newData: Param;
  };
}

interface SetVisibleAquarium {
  readonly type: typeof SET_VISIBLE_AQUARIUM;
  id: number;
}

interface ChagneParamFilter {
  readonly type: typeof CHANGE_PARAM_FILTER;
  filter: string;
}

interface AddGraphData {
  readonly type: typeof ADD_GRAPH_DATA;
  label: string;
}

interface ShowGraphData {
  readonly type: typeof SHOW_ON_GRAPH;
  label: string;
}

export type GraphActionTypes = AddGraphData | ShowGraphData;

export type ActionTypes =
  | AddAquarium
  | AddAquariumData
  | SetVisibleAquarium
  | ChagneParamFilter;
