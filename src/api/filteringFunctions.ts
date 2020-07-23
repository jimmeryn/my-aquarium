import { Param, Refill } from "../models";

export const getLatestParams = (params: Param[]): Param[] => {
  const latestParamDate = new Date(
    Math.max.apply(
      null,
      params.map(e => new Date(e.date))
    )
  );
  return params.filter(
    e => e.date.toISOString() === latestParamDate.toISOString()
  );
};

export const getLatestRefill = (refills: Refill[]) => {
  const latestRefillDate = refills
    .map(e => e.date)
    .sort()
    .reverse()[0];

  return refills.filter(e => e.date === latestRefillDate)[0];
};
