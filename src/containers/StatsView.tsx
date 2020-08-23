import * as React from "react";

import Graph from "../components/Graph";
import { ActionTypes, CHANGE_PARAM_FILTER } from "../actions";
import { State } from "../store";
import { useSelector, useDispatch } from "react-redux";
import StatsTable from "../components/StatsTable";

const StatsView: React.FunctionComponent = () => {
  const dispatch = useDispatch<React.Dispatch<ActionTypes>>();

  const paramFilterDispatch = (filter: string) =>
    dispatch({ type: CHANGE_PARAM_FILTER, filter });

  const { paramFilter, labels, params } = useSelector((state: State) => ({
    aquariumsById: state.aquariums.byId,
    visibleAquarium: state.visibleAquarium,
    paramFilter: state.paramFilter,
    labels: state.graphLabels,
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

  // Getting all dates from params with given label
  const dates: string[] = [
    ...new Set(
      filteredParams
        .map(paramArr => paramArr.map(param => param.date))
        .reduce((ac, cur) => [...cur, ...ac], [])
    ),
  ].sort();

  // Set value for given date as param value if exists or null if doesn't.
  // Data is given for 2 charts so it's tuple of data
  const data: number[][] = filteredParams
    .map(dataArray =>
      dates.map(date => {
        const paramWithGivenDate = dataArray.find(data => data.date === date);
        return paramWithGivenDate ? paramWithGivenDate.value : null;
      })
    )
    // If there is null in values array change it to:
    // - average of value before and after null or
    // - value before null if value after not exist
    .map(dataArray =>
      dataArray.map((currentValue, i, dataArr) => {
        if (currentValue == null) {
          return dataArr[i + 1]
            ? (dataArr[i - 1] + dataArr[i + 1]) / 2
            : dataArr[i - 1];
        }
        return currentValue;
      })
    );

  return (
    <div className="stats-view">
      <Graph dates={dates} labels={labels} paramData={data} />
      <StatsTable
        paramFilter={paramFilter}
        paramFilterDispatch={paramFilterDispatch}
        params={params}
      />
    </div>
  );
};

export default StatsView;
