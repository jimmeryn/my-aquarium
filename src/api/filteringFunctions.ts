import { Param } from "../models";

// TODO: Add API - currently data is from JSON file and cannot be saved.
// Filtering state to get latest params or latest refill

// Duplicating function. TODO: refacto into one function
export const getLatestParams = (params: Param[]): Param[] => {
  params = params.filter(param => param.name !== "refills");
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

export const getLatestRefill = (params: Param[]) => {
  params = params.filter(param => param.name === "refills");
  const latestRefillDate = new Date(
    Math.max.apply(
      null,
      params.map(e => new Date(e.date))
    )
  );
  return params.filter(
    e => e.date.toISOString() === latestRefillDate.toISOString()
  )[0];
};
