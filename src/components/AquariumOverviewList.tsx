import * as React from "react";
import { Grid } from "@material-ui/core";
import GroupButton from "./GroupButton";

const AquariumOverviewList: React.FunctionComponent<{
  index: number;
  // TODO: change visibleAquariumDispatch to something like setCurrentlyVisibleAquariumIndex
  // (component not avare that it's using dispatch or state)
  visibleAquariumDispatch: (id: number) => void;
  aquariumName?: string;
}> = ({ index, visibleAquariumDispatch, aquariumName }) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupButton
        className={"group-list-title-button"}
        typography={"group-list-title"}
        name={aquariumName ?? `Aquarium #${index + 1}`}
        dividers={true}
        onClick={() => {
          visibleAquariumDispatch(index);
        }}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={`Show Param`}
        onClick={() => {
          visibleAquariumDispatch(index);
        }}
      />
    </Grid>
    <Grid item xs>
      <GroupButton className={"overview-component"} name={"Add Param"} />
    </Grid>
    <Grid item xs>
      <GroupButton className={"overview-component"} name={"Add Refill"} />
    </Grid>
  </Grid>
);

export default AquariumOverviewList;
