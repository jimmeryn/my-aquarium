import * as React from "react";
import { Grid } from "@material-ui/core";

import { getLatestParams, getLatestRefill } from "./helperFunctions";
import { Aquarium } from "src/store/types";

import GroupComponent from "./GroupComponent";
import GroupListTitleComponent from "./GroupListTitleComponent";

const AquariumViewList: React.FunctionComponent<{
  aquarium: Aquarium;
}> = ({ aquarium }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupListTitleComponent name={aquarium.name} index={aquarium.id} />
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
