import * as React from "react";

import Graph from "./Graph";
import StatsTable from "../containers/StatsTable";

const StatsView: React.FunctionComponent = () => (
  <div className="stats-view">
    <Graph />
    <StatsTable />
  </div>
);

export default StatsView;
