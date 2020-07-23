import * as React from "react";
import { useSelector } from "react-redux";
import ParamButtonList from "./ParamButtonList";
import CurrentParamTable from "../components/CurrentParamTable";
import GraphModifiButtonsList from "../components/GraphModifiButtonsList";
import { State } from "../store";

const StatsTable: React.FunctionComponent = () => {
  const { aquariumsById } = useSelector((state: State) => state.aquariums);
  return (
    <div className="stats-table">
      <ParamButtonList />
      {/* TODO: Change to dynamicly update which aquarium is being displayed, and get filter*/}
      <CurrentParamTable aquarium={aquariumsById[0]} filter={"no3"} />
      <GraphModifiButtonsList />
    </div>
  );
};

export default StatsTable;
