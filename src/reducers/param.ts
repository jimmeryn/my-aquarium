import { Param } from "../models";
import { ActionTypes, ADD_AQUARIUM_DATA } from "../actions";

const param = (state: Param, action: ActionTypes) => {
  switch (action.type) {
    case ADD_AQUARIUM_DATA:
      return {
        ...state,
        id: action.payload.paramId,
        aquariumId: action.id,
        date: action.payload.date,
        value: action.payload.value,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default param;
