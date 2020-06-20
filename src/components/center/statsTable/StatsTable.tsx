import * as React from "react";
import ParamButtonList from "./ParamButtonsList";
import CurrentParamTable from "./CurrentParamTable";
import GraphModifyList from "./GraphModifiList";

const StatsTable: React.FunctionComponent = () => (
  <div className="stats-table">
    <ParamButtonList />
    <CurrentParamTable />
    <GraphModifyList />
  </div>
);

export default StatsTable;
