export interface UnnormalizedStateData {
  aquariums: Aquarium[];
}

// TODO: Add upper and lower bound for params

// TODO: [key: string]: number
export interface UnnormalizedParam {
  date: string;
  aquariumId: number;
  Cl2: number;
  pH: number;
  KH: number;
  GH: number;
  NO2: number;
  NO3: number;
  [key: string]: string | number;
}

export interface Aquarium {
  id: number;
  size: number;
  data: AquariumData[];
  waterRefills: Refills[];
}

interface Data {
  id: number;
  aquariumId: number;
  //TODO: change to Date type. For now its just string
  date: string;
}

interface Param {
  name: string;
  value: number | null;
}

export interface AquariumData extends Data {
  params: Param[];
}

export interface Refills extends Data {
  liters: number;
}

export interface NormalizedObject<T> {
  byId: { [id: number]: T };
  allIds: number[];
}

export interface State {
  aquariums: NormalizedObject<Aquarium>;
  parameters: NormalizedObject<AquariumData>;
  refills: NormalizedObject<Refills>;
}

// Describing different ACTION NAMES available
export const ADD_AQUARIUM = "ADD_AQUARIUM";
export const ADD_AQUARIUM_DATA = "ADD_AQUARIUM_DATA";

interface AddAquarium {
  type: typeof ADD_AQUARIUM;
  id: number;
  payload: {
    size: number;
    name?: string;
  };
}

interface AddAquariumData {
  type: typeof ADD_AQUARIUM_DATA;
  id: number;
  payload: {
    newData: AquariumData | Refills;
  };
}

export type ActionTypes = AddAquarium | AddAquariumData;
