import * as React from "react";
import { Param } from "src/models";
import ParamButtonList from "./ParamButtonList";
import CurrentParamTable from "./CurrentParamTable";
import GraphModifiButtonsList from "../containers/GraphModifiButtonsList";

const StatsTable: React.FunctionComponent<{
  paramFilter: string;
  paramFilterDispatch: (filter: string) => void;
  params: Param[];
}> = ({ paramFilter, paramFilterDispatch, params }) => {
  const filteredParams = params
    .filter(e => e.name.toLocaleLowerCase() === paramFilter.toLowerCase())
    .reverse();
  return (
    <div className="stats-table">
      <ParamButtonList
        params={params}
        onClick={paramFilterDispatch}
        filter={paramFilter}
      />
      <CurrentParamTable params={filteredParams} />
      <GraphModifiButtonsList />
    </div>
  );
};

export default StatsTable;
