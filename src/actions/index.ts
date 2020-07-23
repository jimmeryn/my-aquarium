import {
  ActionTypes,
  ADD_AQUARIUM,
  ADD_AQUARIUM_DATA,
  SET_VISIBLE_AQUARIUM
} from "../store/types/actionTypes";

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
    type: SET_VISIBLE_AQUARIUM,
    id: visibleAquariumId
  };
};
