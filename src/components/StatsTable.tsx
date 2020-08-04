import * as React from "react";
import { Aquarium } from "src/models";
import ParamButtonList from "./ParamButtonList";
import CurrentParamTable from "./CurrentParamTable";
import GraphModifiButtonsList from "../containers/GraphModifiButtonsList";

const StatsTable: React.FunctionComponent<{
  aquariumsById: { [key: number]: Aquarium };
  visibleAquarium: number;
  paramFilter: string;
  paramFilterDispatch: (filter: string) => void;
}> = ({ aquariumsById, visibleAquarium, paramFilter, paramFilterDispatch }) => (
  <div className="stats-table">
    <ParamButtonList
      aquariumsById={aquariumsById}
      visibleAquarium={visibleAquarium}
      onClick={paramFilterDispatch}
      filter={paramFilter}
    />
    <CurrentParamTable
      aquarium={aquariumsById[visibleAquarium]}
      filter={paramFilter}
    />
    <GraphModifiButtonsList />
  </div>
);

export default StatsTable;
