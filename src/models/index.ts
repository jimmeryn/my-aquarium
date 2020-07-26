export interface UnnormalizedStateData {
  aquariums: UnnormalizedAquarium[];
}

// TODO: Add upper and lower bound for params

export interface UnnormalizedParam {
  date: string;
  [key: string]: string | number;
}

export interface UnnormalizedAquarium {
  id: number;
  size: number;
  data: UnnormalizedParam[];
  waterRefills: UnnormalizedParam[];
}

export interface Aquarium {
  id: number;
  name?: string;
  size: number;
  params: Param[];
  refills: Data[];
}

interface Data {
  id: number;
  aquariumId: number;
  //TODO: change to Date type. For now its just string
  date: Date;
  value: number | null;
}

export interface Param extends Data {
  name: string;
}

export interface Refill extends Data {}

export interface NormalizedObject<T> {
  byId: { [id: number]: T };
  allIds: number[];
}

export interface State {
  aquariums: NormalizedObject<Aquarium>;
  parameters: NormalizedObject<Param>;
  refills: NormalizedObject<Refill>;
  visibleAquarium: number;
}