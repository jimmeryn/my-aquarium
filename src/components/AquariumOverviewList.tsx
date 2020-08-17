import * as React from "react";
import { Grid } from "@material-ui/core";
import GroupButton from "./GroupButton";

const AquariumOverviewList: React.FunctionComponent<{
  index: number;
  setVisibleAquariumIndex: (index: number) => void;
  setMenuActive: () => void;
  setDialogHidden: () => void;
  setDialogParams: () => void;
  setDialogRefill: () => void;
  aquariumName?: string;
}> = ({
  index,
  setVisibleAquariumIndex,
  setMenuActive,
  setDialogHidden,
  setDialogParams,
  setDialogRefill,
  aquariumName
}) => (
  <Grid container spacing={0} direction="column" alignItems="stretch">
    <Grid item xs>
      <GroupButton
        className={"group-list-title-button"}
        typography={"group-list-title"}
        name={aquariumName ?? `Aquarium #${index + 1}`}
        dividers={true}
        handleButtonClick={() => {
          setVisibleAquariumIndex(index);
          setMenuActive();
          setDialogHidden();
        }}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={"Show Params"}
        handleButtonClick={() => {
          setVisibleAquariumIndex(index);
          setMenuActive();
          setDialogHidden();
        }}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={"Add Params"}
        handleButtonClick={setDialogParams}
      />
    </Grid>
    <Grid item xs>
      <GroupButton
        className={"overview-component"}
        name={"Add Refill"}
        handleButtonClick={setDialogRefill}
      />
    </Grid>
  </Grid>
);

export default AquariumOverviewList;
