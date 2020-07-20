import * as React from "react";
import { useSelector } from "react-redux";

import Graph from "./Graph";
import StatsTable from "./statsTable/StatsTable";
import { State } from "src/store";

const StatsView: React.FunctionComponent = () => {
  const { aquariumsById, allaquariumsIds } = useSelector(
    (state: State) => state.aquariums
  );

  return (
    <div className="stats-view">
      <Graph />
      <StatsTable />
    </div>
  );
};

export default StatsView;
