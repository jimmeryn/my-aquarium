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

  const { aquariumsById, visibleAquarium, paramFilter } = useSelector(
    (state: State) => ({
      aquariumsById: state.aquariums.aquariumsById,
      visibleAquarium: state.visibleAquarium,
      paramFilter: state.paramFilter
    })
  );
  // TODO: Get dates, values and labels currenty displayed on graph from redux state
  return (
    <div className="stats-view">
      <Graph
        dates={[
          "10/04/2018",
          "10/05/2018",
          "10/06/2018",
          "10/07/2018",
          "10/08/2018",
          "10/09/2018",
          "10/10/2018",
          "10/11/2018",
          "10/12/2018",
          "10/13/2018",
          "10/14/2018",
          "10/15/2018"
        ]}
        labels={["cl2", "no3"]}
        paramData={[
          [31, 21, 123, 123, 12, 65, 21, 12, 32, 41, 21, 54],
          [22, 19, 27, 23, 22, 24, 17, 25, 23, 24, 20, 19]
        ]}
      />
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
