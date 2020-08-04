import { Param } from "../models";

// Duplicating gunction. TODO: refactoi into one function
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
