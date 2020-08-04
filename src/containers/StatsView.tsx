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

  const { aquariumsById, visibleAquarium, paramFilter, labels } = useSelector(
    (state: State) => ({
      aquariumsById: state.aquariums.aquariumsById,
      visibleAquarium: state.visibleAquarium,
      paramFilter: state.paramFilter,
      labels: state.graphLabels
    })
  );

  // TODO: This code shouldyn't be so hard to understand...
  const dates = [
    ...new Set(
      labels
        .map(label =>
          aquariumsById[visibleAquarium].params.reduce(
            (paramsArray, currentParam) =>
              currentParam.name === label
                ? [
                    currentParam.date.toISOString().split("T")[0],
                    ...paramsArray
                  ]
                : paramsArray,
            []
          )
        )
        .reduce((ac, cur) => [...cur, ...ac], [])
    )
  ].sort();

  // For every label create data array with name, value and date
  // then create array based on dates (if param exist on given date use it if not set to null)
  // Not pretty, but so far the best solution I could find...
  const data = labels
    .map(label =>
      aquariumsById[visibleAquarium].params.reduce(
        (paramsArray, currentParam) =>
          currentParam.name === label
            ? [
                {
                  name: currentParam.name,
                  value: currentParam.value,
                  date: currentParam.date.toISOString().split("T")[0]
                },
                ...paramsArray
              ]
            : paramsArray,
        []
      )
    )
    .map(dataArray =>
      dates.map(date =>
        dataArray.find(data => data.date === date)
          ? dataArray.find(data => data.date === date).value
          : null
      )
    );

  return (
    <div className="stats-view">
      <Graph dates={dates} labels={labels} paramData={data} />
      <StatsTable
        aquariumsById={aquariumsById}
        visibleAquarium={visibleAquarium}
        paramFilter={paramFilter}
        paramFilterDispatch={paramFilterDispatch}
      />
    </div>
  );
};

export default StatsView;
