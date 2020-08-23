export interface UnnormalizedStateData {
  aquariums: UnnormalizedAquarium[];
}

// TODO: Add upper and lower bound for params
// TODO v2: now use them (upper and lower bound must be fixed)

export const defaultParams = {
  Cl2: { upper: 10, lower: 10 },
  pH: { upper: 10, lower: 10 },
  KH: { upper: 10, lower: 10 },
  GH: { upper: 10, lower: 10 },
  NO2: { upper: 10, lower: 10 },
  NO3: { upper: 10, lower: 10 },
};

export interface UnnormalizedAquarium {
  id: number;
  size: number;
  data: UnnormalizedParam[];
  waterRefills: UnnormalizedParam[];
}

export interface UnnormalizedParam {
  date: string;
  [key: string]: string | number;
}

export interface Aquarium {
  id: number;
  name?: string;
  size: number;
  params: number[];
}

export interface Param {
  id: number;
  aquariumId: number;
  date: Date;
  value: number | null;
  name: string;
}

export interface NormalizedObject<T> {
  byId: { [id: number]: T };
  allIds: number[];
}

export interface State {
  aquariums: NormalizedObject<Aquarium>;
  params: NormalizedObject<Param>;
  visibleAquarium: number;
}
