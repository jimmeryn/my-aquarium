import * as React from "react";
import { useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";
import { Aquarium } from "../models";
import {
  ActionTypes,
  SET_VISIBLE_AQUARIUM,
  UIActionTypes,
  SET_MENU_STATE,
  GraphActionTypes,
  SHOW_ON_GRAPH,
  SET_DIALOG_STATE
} from "../actions";
import { getLatestParams, getLatestRefill } from "../api/filteringFunctions";
import AquariumGroupList from "../components/AquariumGroupList";
import GroupButton from "../components/GroupButton";

const AquariumViewMenu: React.FunctionComponent<{
  aquarium: Aquarium;
}> = ({ aquarium }) => {
  const { name, id, params } = aquarium;

  const dispatch = useDispatch<React.Dispatch<ActionTypes>>();
  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });

  const dispatchMenu = useDispatch<React.Dispatch<UIActionTypes>>();
  const setMenuStateDispatch = () => dispatchMenu({ type: SET_MENU_STATE });
  const setDialogStateDispatch = () => dispatchMenu({ type: SET_DIALOG_STATE });

  const dispatchGraph = useDispatch<React.Dispatch<GraphActionTypes>>();
  const showOnGraphDispatch = (paramFilter: string) => () =>
    dispatchGraph({ type: SHOW_ON_GRAPH, label: paramFilter });

  return (
    <Grid container spacing={0} direction="column" alignItems="stretch">
      <GroupButton
        className={"title"}
        typography={"title-h1"}
        name={"My Aquarium"}
        onClick={() => {
          visibleAquariumDispatch(-1);
          setMenuStateDispatch();
        }}
      />
      <Grid item xs>
        <GroupButton
          className={"group-list-title-button"}
          typography={"group-list-title"}
          name={name ?? `Aquarium #${id + 1}`}
          dividers={true}
          onClick={() => {
            visibleAquariumDispatch(id);
            setMenuStateDispatch();
          }}
        />
      </Grid>
      <Grid item xs>
        <AquariumGroupList
          refill={getLatestRefill(params)}
          params={getLatestParams(params)}
          onClick={setMenuStateDispatch}
          paramClick={showOnGraphDispatch}
          addButtonClick={setDialogStateDispatch}
        />
      </Grid>
    </Grid>
  );
};

export default AquariumViewMenu;
