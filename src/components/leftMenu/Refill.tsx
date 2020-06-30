import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Refill: React.FunctionComponent = () => (
  <div className="refill">
    <ListItem button>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom>Refill</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>10 [l]</Typography>
        </Grid>
      </Grid>
    </ListItem>
  </div>
);

export default Refill;
