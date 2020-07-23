import { Param, Refill } from "../models";

// Describing different ACTION NAMES available
export const ADD_AQUARIUM = "ADD_AQUARIUM";
export const ADD_AQUARIUM_DATA = "ADD_AQUARIUM_DATA";
export const SET_VISIBLE_AQUARIUM = "SET_VISIBLE_AQUARIUM";

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
    newData: Param | Refill;
  };
}

interface SetVisibleAquarium {
  readonly type: typeof SET_VISIBLE_AQUARIUM;
  id: number;
}

export type ActionTypes = AddAquarium | AddAquariumData | SetVisibleAquarium;
