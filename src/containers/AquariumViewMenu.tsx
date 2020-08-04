import * as React from "react";
import { useDispatch } from "react-redux";

import { Aquarium } from "../models";
import { ActionTypes, SET_VISIBLE_AQUARIUM } from "../actions";
import { getLatestParams, getLatestRefill } from "../api/filteringFunctions";
import { Grid } from "@material-ui/core";
import AquariumGroupList from "./AquariumGroupList";
import GroupButton from "../components/GroupButton";

const AquariumViewMenu: React.FunctionComponent<{
  aquarium: Aquarium;
}> = ({ aquarium }) => {
  const { name, id, params } = aquarium;

  const dispatch = useDispatch<React.Dispatch<ActionTypes>>();
  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });

  return (
    <Grid container spacing={0} direction="column" alignItems="stretch">
      <GroupButton
        className={"title"}
        typography={"title-h1"}
        name={"My Aquarium"}
        onClick={() => {
          visibleAquariumDispatch(-1);
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
          }}
        />
      </Grid>
      <Grid item xs>
        <AquariumGroupList
          refill={getLatestRefill(params)}
          params={getLatestParams(params)}
        />
      </Grid>
    </Grid>
  );
};

export default AquariumViewMenu;
