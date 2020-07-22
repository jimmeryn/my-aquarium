import {
  ActionTypes,
  ADD_AQUARIUM,
  ADD_AQUARIUM_DATA,
  SET_VISIBILITY
} from "../types";

// function addParam() {}

// function addRefill() {}

// function addData() {}

function addAquarium(size: number, name?: string): ActionTypes {
  const id = 1; //generateNewId() based on current state
  return {
    type: ADD_AQUARIUM,
    id: 1,
    payload: {
      size,
      name
    }
  };
}

export const setVisibility = (visibleAquariumId: number) => {
  return {
    type: SET_VISIBILITY,
    id: visibleAquariumId
  };
};
