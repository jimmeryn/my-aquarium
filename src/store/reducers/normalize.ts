import {
  UnnormalizedStateData,
  State,
  Param,
  UnnormalizedParam,
  Refill,
  Aquarium,
  UnnormalizedAquarium
} from "../types";

// NOTE: Not pretty but doing it's job.
// For future: use data from backend (database),
// no need for normalizing json
export default function normalize({ aquariums }: UnnormalizedStateData): State {
  const paramsById = getParamsById(aquariums);
  const refillsById = getRefillsById(aquariums);
  const aquariumsById = getAquariumsById(aquariums, paramsById, refillsById);
  return {
    aquariums: {
      byId: aquariumsById,
      allIds: aquariumsById.map(({ id }) => id)
    },
    parameters: { byId: paramsById, allIds: paramsById.map(({ id }) => id) },
    refills: {
      byId: refillsById,
      allIds: refillsById.map(({ id }: Refill) => id)
    }
  };
}

const createParam = (
  aquariumId: number,
  date: string,
  name: string,
  value: number
) => {
  const [day, month, year] = date.split(".");
  return {
    id: 0, // id added later -> when all params are in one array
    aquariumId,
    date: new Date(`${year}-${month}-${day}`),
    name,
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
      ? [...all, createParam(aquariumId, date, cur, params[cur] as number)]
      : all;
  }, []);
}
const refactorAquariumData = (
  aquariumData: UnnormalizedParam[],
  aquariumId: number
) =>
  aquariumData
    .map((e, i) => refactorParam(e, aquariumId))
    .reduce((acc, val) => acc.concat(val), []);

const getParamsById = (aquariums: UnnormalizedAquarium[]) =>
  aquariums
    .map(e => refactorAquariumData(e.data, e.id))
    .reduce((acc, val) => acc.concat(...val), [])
    .map((e, i) => ({ ...e, id: i }));

const refactorRefill = (refill: UnnormalizedParam, aquariumId: number) => {
  const [day, month, year] = refill.date.split(".");
  return {
    id: 0, // id added later -> when all params are in one array
    aquariumId,
    date: new Date(`${year}-${month}-${day}`),
    name,
    value: refill.value
  };
};

const getRefillsById = (aquariums: UnnormalizedAquarium[]) =>
  aquariums
    .reduce(
      (refillsById, currentAquarium, aquariumId) => [
        ...refillsById,
        currentAquarium.waterRefills.map(e => refactorRefill(e, aquariumId))
      ],
      []
    )
    .reduce((acc, val) => acc.concat(...val), [])
    .map((e: UnnormalizedParam, i: number) => ({ ...e, id: i }));

const getAquariumsById = (
  aquariums: UnnormalizedAquarium[],
  params: Param[],
  refills: Refill[]
): Aquarium[] =>
  aquariums.reduce(
    (aquariumArray, currentAquarium) => [
      ...aquariumArray,
      refactorAquarium(
        currentAquarium,
        params.filter(e => e.aquariumId === currentAquarium.id),
        refills.filter(e => e.aquariumId === currentAquarium.id)
      )
    ],
    []
  );

const refactorAquarium = (
  { id, size }: UnnormalizedAquarium,
  params: Param[],
  refills: Refill[]
) => ({
  id,
  size,
  params,
  refills
});
