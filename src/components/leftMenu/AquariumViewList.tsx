import * as React from "react";
import GroupComponent from "./GroupComponent";
import { Grid } from "@material-ui/core";
import { getLatestParams, getLatestRefill } from "./helperFunctions";
import { Aquarium } from "src/store/types";

const AquariumViewList: React.FunctionComponent<{
  aquarium: Aquarium;
}> = ({ aquarium }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <h3 className="group-list-title">
        {aquarium.name ?? `Aquarium #${aquarium.id + 1}`}
      </h3>
    </Grid>
    <Grid item xs>
      <GroupComponent
        params={getLatestParams(aquarium.params)}
        refill={getLatestRefill(aquarium.refills)}
      />
    </Grid>
  </Grid>
);

export default AquariumViewList;
