import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Param: React.FunctionComponent = () => (
  <div className="param">
    <ListItem button divider>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom>Param</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>14.50 [mg/l]</Typography>
        </Grid>
      </Grid>
    </ListItem>
  </div>
);

export default Param;
