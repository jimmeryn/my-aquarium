import * as React from "react";
import { Grid } from "@material-ui/core";
import GroupButton from "./GroupButton";

const AquariumOverviewList: React.FunctionComponent<{
  index: number;
  setVisibleAquariumIndex: (index: number) => void;
  setMenuActive: () => void;
  setDialogActive: () => void;
  aquariumName?: string;
}> = ({
  index,
  setVisibleAquariumIndex,
  setMenuActive,
  setDialogActive,
  aquariumName
}) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupButton
        className={"group-list-title-button"}
        typography={"group-list-title"}
        name={aquariumName ?? `Aquarium #${index + 1}`}
        dividers={true}
        onClick={() => {
          setVisibleAquariumIndex(index);
          setMenuActive();
        }}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={"Show Params"}
        onClick={() => {
          setVisibleAquariumIndex(index);
          setMenuActive();
        }}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={"Add Param"}
        onClick={setDialogActive}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={"Add Refill"}
        onClick={setDialogActive}
      />
    </Grid>
  </Grid>
);

export default AquariumOverviewList;
