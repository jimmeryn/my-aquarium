import * as React from "react";

import Graph from "../components/Graph";
import { ActionTypes, CHANGE_PARAM_FILTER } from "../actions";
import { State } from "../store";
import { useSelector, useDispatch } from "react-redux";
import StatsTable from "../components/StatsTable";
import { Param } from "../models";

const StatsView: React.FunctionComponent = () => {
  const dispatch = useDispatch<React.Dispatch<ActionTypes>>();

  const paramFilterDispatch = (filter: string) =>
    dispatch({ type: CHANGE_PARAM_FILTER, filter });

  const { paramFilter, labels, params } = useSelector((state: State) => ({
    aquariumsById: state.aquariums.byId,
    visibleAquarium: state.visibleAquarium,
    paramFilter: state.paramFilter,
    labels: state.graphLabels.params,
    params: state.params.allIds
      .map(id => state.params.byId[id])
      .filter(param =>
        state.visibleAquarium !== -1
          ? param.aquariumId === state.visibleAquarium
          : param.aquariumId === 0
      ),
  }));

  const filteredParams = labels.map(label =>
    params
      .filter(param => param.name === label)
      .map(param => ({
        value: param.value,
        date: param.date.toISOString().split("T")[0],
      }))
  );

  // Getting all dates from params
  const dates: string[] = [
    ...new Set(
      params
        .filter(e => e.name !== "refills")
        .map(param => param.date.toISOString().split("T")[0])
    ),
  ].sort();

  // Set value for given date as param value if exists or null if doesn't.
  // Data is given for 2 charts so it's tuple of data
  const data: number[][] = filteredParams.map(dataArray =>
    dates.map(date => {
      const paramWithGivenDate = dataArray.find(data => data.date === date);
      return paramWithGivenDate ? paramWithGivenDate.value : null;
    })
  );

  const refills = params.filter(param => param.name === "refills");

  const calcRefillsSum = (
    startDate: string,
    endDate: string,
    refills: Param[]
  ): number =>
    refills
      .slice(
        refills.findIndex(
          e => e.date.toISOString().split("T")[0] === startDate
        ),
        endDate !== undefined
          ? refills.findIndex(
              e => e.date.toISOString().split("T")[0] === endDate
            )
          : refills.length
      )
      .reduce((acc, cur) => (acc += cur.value), 0);

  const initV: number[] = [];
  const refilsValues = dates.reduce(
    (acc, cur, idx, arr) => [
      ...acc,
      calcRefillsSum(cur, arr[idx + 1], refills),
    ],
    initV
  );

  return (
    <div className="stats-view">
      <Graph
        dates={dates}
        labels={labels}
        paramData={data}
        refills={refilsValues}
      />
      <StatsTable
        paramFilter={paramFilter}
        paramFilterDispatch={paramFilterDispatch}
        params={params}
      />
    </div>
  );
};

export default StatsView;
