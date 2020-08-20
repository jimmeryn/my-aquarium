import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import {
  ActionTypes,
  SET_VISIBLE_AQUARIUM,
  UIActionTypes,
  SET_MENU_STATE,
  GraphActionTypes,
  SHOW_ON_GRAPH,
  SET_DIALOG_STATE,
  DialogVariant,
  REFILL,
  PARAMS,
  HIDDEN
} from "../actions";
import { getLatestParams, getLatestRefill } from "../api/filteringFunctions";
import AquariumGroupList from "../components/AquariumGroupList";
import GroupButton from "../components/GroupButton";
import { State } from "../store";

const AquariumViewMenu: React.FunctionComponent = () => {
  const { aquarium, params } = useSelector((state: State) => ({
    aquarium: state.aquariums.byId[state.visibleAquarium],
    params: state.params.allIds
      .map(id => state.params.byId[id])
      .filter(param => param.aquariumId === state.visibleAquarium)
  }));

  const { id, name } = aquarium;

  const dispatch = useDispatch<
    React.Dispatch<ActionTypes | UIActionTypes | GraphActionTypes>
  >();

  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });

  const setMenuStateDispatch = () => dispatch({ type: SET_MENU_STATE });

  const setDialogStateDispatch = (variant: DialogVariant) =>
    dispatch({ type: SET_DIALOG_STATE, variant });

  const showOnGraphDispatch = (paramFilter: string) =>
    dispatch({ type: SHOW_ON_GRAPH, label: paramFilter });

  const handleParamClick = (paramFilter: string) => () => {
    showOnGraphDispatch(paramFilter);
    setDialogStateDispatch(HIDDEN);
  };

  return (
    <Grid container spacing={0} direction="column" alignItems="stretch">
      <GroupButton
        className={"title"}
        typography={"title-h1"}
        name={"My Aquarium"}
        handleButtonClick={() => {
          visibleAquariumDispatch(-1);
          setMenuStateDispatch();
          setDialogStateDispatch(null);
        }}
      />
      <Grid item xs>
        <GroupButton
          className={"group-list-title-button"}
          typography={"group-list-title"}
          name={name ?? `Aquarium #${id + 1}`}
          dividers={true}
          handleButtonClick={() => {
            visibleAquariumDispatch(id);
            setMenuStateDispatch();
          }}
        />
      </Grid>
      <Grid item xs>
        <AquariumGroupList
          refill={getLatestRefill(params)}
          params={getLatestParams(params)}
          handleCloseMenu={setMenuStateDispatch}
          handleParamClick={handleParamClick}
          handleRefillClick={() => setDialogStateDispatch(REFILL)}
          handleAddParamClick={() => setDialogStateDispatch(PARAMS)}
        />
      </Grid>
    </Grid>
  );
};

export default AquariumViewMenu;
