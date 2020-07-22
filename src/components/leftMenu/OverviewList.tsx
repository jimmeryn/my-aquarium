import * as React from "react";
import GroupName from "./GroupName";
import { Grid } from "@material-ui/core";
import OverviewComponent from "./OverviewComponent";

const OverviewList: React.FunctionComponent<{
  name?: string;
  index: number;
}> = ({ name, index }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupName name={name} index={index} />
    </Grid>
    <Grid item xs>
      <OverviewComponent label={"Show Param"} />
      <OverviewComponent label={"Add Param"} />
      <OverviewComponent label={"Add Refill"} />
    </Grid>
  </Grid>
);

export default OverviewList;
