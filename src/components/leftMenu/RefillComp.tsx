import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Refill } from "src/store/types";

type RefillProps = {
  latestRefill: Refill | undefined;
};

const RefillComp: React.FunctionComponent<RefillProps> = ({ latestRefill }) => (
  <div className="refill">
    <ListItem button>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom>Refill</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>
            {latestRefill ? `${latestRefill.value} [l]` : "No refills"}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  </div>
);

export default RefillComp;
