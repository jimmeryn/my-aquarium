import * as React from "react";
import { useSelector } from "react-redux";
import ParamButtonList from "./ParamButtonList";
import CurrentParamTable from "./CurrentParamTable";
import GraphModifyList from "./GraphModifiList";
import { State } from "../../../store";

const StatsTable: React.FunctionComponent = () => {
  const { allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => state.aquariums
  );
  return (
    <div className="stats-table">
      <ParamButtonList />
      {/* TODO: Change to dynamicly update which aquarium is being displayed, and get filter*/}
      <CurrentParamTable aquarium={aquariumsById[0]} filter={"no3"} />
      <GraphModifyList />
    </div>
  );
};

export default StatsTable;
