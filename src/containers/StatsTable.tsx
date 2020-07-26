import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import ParamButtonList from "../components/ParamButtonList";
import CurrentParamTable from "../components/ParamTable";
import GraphModifiButtonsList from "../components/GraphModifiButtonsList";
import { State } from "../store";
import { ActionTypes, CHANGE_PARAM_FILTER } from "../actions/actionTypes";

const StatsTable: React.FunctionComponent = () => {
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

  return (
    <div className="stats-table">
      <ParamButtonList
        aquariumsById={aquariumsById}
        visibleAquarium={visibleAquarium}
        onClick={paramFilterDispatch}
      />
      {/* TODO: Change to dynamicly update which aquarium is being displayed, and get filter*/}
      <CurrentParamTable
        aquarium={aquariumsById[visibleAquarium]}
        filter={paramFilter}
      />
      <GraphModifiButtonsList />
    </div>
  );
};

export default StatsTable;
