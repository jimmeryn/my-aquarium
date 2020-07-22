import * as React from "react";
import { Grid } from "@material-ui/core";

import { getLatestParams, getLatestRefill } from "./helperFunctions";
import { Aquarium } from "src/store/types";
import GroupName from "./GroupName";
import GroupList from "./GroupList";

const AquariumViewMenu: React.FunctionComponent<{
  aquarium: Aquarium;
}> = ({ aquarium }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupName name={aquarium.name} index={aquarium.id} />
    </Grid>
    <Grid item xs>
      <GroupList
        refill={getLatestRefill(aquarium.refills)}
        params={getLatestParams(aquarium.params)}
      />
    </Grid>
  </Grid>
);

export default AquariumViewMenu;
