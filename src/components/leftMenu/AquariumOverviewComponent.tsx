import * as React from "react";
import GroupListTitleComponent from "./GroupListTitleComponent";
import { Grid } from "@material-ui/core";
import NewParamComp from "./NewParamComponent";
import RefillComp from "./RefillComponent";

const AquariumOverviewComponent: React.FunctionComponent<{
  name?: string;
  index: number;
}> = ({ name, index }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupListTitleComponent name={name} index={index} />
    </Grid>
    <Grid item xs>
      <NewParamComp />
      <RefillComp latestRefill={undefined} />
      <NewParamComp />
    </Grid>
  </Grid>
);

export default AquariumOverviewComponent;
