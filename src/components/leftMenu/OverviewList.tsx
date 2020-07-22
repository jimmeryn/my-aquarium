import * as React from "react";
import GroupName from "./GroupName";
import { Grid } from "@material-ui/core";
import OverviewComponent from "./OverviewComponent";

const OverviewList: React.FunctionComponent<{
  name?: string;
  index: number;
  visibleAquariumDispatch: (id: number) => void;
}> = ({ name, index, visibleAquariumDispatch }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs onClick={() => visibleAquariumDispatch(index)}>
      <GroupName name={name} index={index} />
    </Grid>
    <Grid item xs onClick={() => visibleAquariumDispatch(index)}>
      <OverviewComponent label={"Show Param"} />
    </Grid>
    <Grid item xs>
      <OverviewComponent label={"Add Param"} />
    </Grid>
    <Grid item xs>
      <OverviewComponent label={"Add Refill"} />
    </Grid>
  </Grid>
);

export default OverviewList;
