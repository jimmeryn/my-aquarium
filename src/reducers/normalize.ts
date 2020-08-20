import {
  UnnormalizedStateData,
  UnnormalizedParam,
  UnnormalizedAquarium,
  State,
  Param,
  Aquarium
} from "../models";

// NOTE: Not pretty but doing it's job.
// For future: use data from backend (database),
// no need for normalizing json
export default function normalize({ aquariums }: UnnormalizedStateData): State {
  const paramsById = getParamsById(aquariums);
  const aquariumsById = getAquariumsById(aquariums, paramsById);
  return {
    aquariums: {
      byId: aquariumsById,
      allIds: aquariumsById.map(({ id }) => id)
    },
    params: {
      byId: paramsById,
      allIds: paramsById.map(({ id }) => id)
    },
    visibleAquarium: -1
  };
}

const getParamsById = (aquariums: UnnormalizedAquarium[]): Param[] =>
  aquariums
    .map(aquarium =>
      refactorAquariumData(
        [...aquarium.waterRefills, ...aquarium.data],
        aquarium.id
      )
    )
    .reduce((acc, val) => acc.concat(...val), [])
    .map((e, i) => ({ ...e, id: i }));

const createParam = (
  aquariumId: number,
  date: string,
  value: number,
  name?: string
): Param => {
  const [day, month, year] = date.split(".");
  return {
    id: 0, // id added later -> when all params are in one array
    aquariumId,
    date: new Date(`${year}-${month}-${day}`),
    name: name !== "value" ? name : "refills",
    value
  };
};

/**
 * Refactoring param.
 * We take object: {
 * date: string/date
 * Cl2: 123,
 * N03: 321, ...
 * } and id of param and of aquarium
 * and returning array of objects:
 * [
 *  {
 *    date: string/date,
 *    name: Cl2,
 *    value: 123
 *  }, ...
 * ]
 */
function refactorParam(param: UnnormalizedParam, aquariumId: number): Param[] {
  const { date, ...params } = param;
  return Object.keys(params).reduce((all, cur) => {
    return cur !== "date"
      ? [...all, createParam(aquariumId, date, params[cur] as number, cur)]
      : all;
  }, []);
}

const refactorAquariumData = (
  aquariumData: UnnormalizedParam[],
  aquariumId: number
) =>
  aquariumData
    .map(e => refactorParam(e, aquariumId))
    .reduce((acc, val) => acc.concat(val), []);

const getAquariumsById = (
  aquariums: UnnormalizedAquarium[],
  params: Param[]
): Aquarium[] =>
  aquariums.reduce(
    (aquariumArray, currentAquarium) => [
      ...aquariumArray,
      refactorAquarium(
        currentAquarium,
        params.filter(e => e.aquariumId === currentAquarium.id)
      )
    ],
    []
  );

const refactorAquarium = (
  { id, size }: UnnormalizedAquarium,
  params: Param[]
) => ({
  id,
  size,
  params: params.map(param => param.id)
});
