import {
  UnnormalizedStateData,
  State,
  AquariumData,
  UnnormalizedParam,
  Refills
} from "../types";

function addAquariumIdToArray(
  aquariumId: number,
  array: Array<AquariumData | Refills>
) {
  return array.map(e => {
    e.aquariumId = aquariumId;
    return e;
  });
}

function normalizeParam(
  aquariumData: UnnormalizedParam,
  id: number
): AquariumData {
  const { aquariumId, date } = aquariumData;
  const params = Object.keys(aquariumData).reduce(
    (params, currentParam) =>
      currentParam !== "date" && currentParam !== "aquariumId"
        ? // TODO error fix: implicitly an 'any' type - no index signature.
          [...params, { [currentParam]: aquariumData[currentParam] }]
        : params,
    []
  );
  return {
    id,
    aquariumId,
    date,
    params
  };
}

export default function normalize(data: UnnormalizedStateData): State {
  const refillsArray = data.aquariums.reduce(
    (refillsArray, aquarium, aquariumId) =>
      refillsArray.concat(
        addAquariumIdToArray(aquariumId, aquarium.waterRefills)
      ),
    []
  );

  const dataArray = data.aquariums
    .reduce(
      (dataArray, aquarium, aquariumId) =>
        dataArray.concat(addAquariumIdToArray(aquariumId, aquarium.data)),
      []
    )
    .map((e, i) => normalizeParam(e, i));

  return {
    aquariums: {
      byId: data.aquariums.reduce(
        (aquariumsObject, aquarium) => ({
          ...aquariumsObject,
          [aquarium.id]: aquarium
        }),
        {}
      ),
      allIds: data.aquariums.map(e => e.id)
    },
    parameters: {
      byId: dataArray.reduce(
        (dataObject, param, i) => ({
          ...dataObject,
          [i]: param
        }),
        {}
      ),
      allIds: dataArray.map((_, i) => i)
    },
    refills: {
      byId: refillsArray.reduce(
        (refillsObject, refill, i) => ({
          ...refillsObject,
          [i]: refill
        }),
        {}
      ),
      allIds: refillsArray.map((_, i) => i)
    }
  };
}
