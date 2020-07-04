import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

type ParamCompType = {
  name: string;
  value: number;
};

const ParamComp: React.FunctionComponent<ParamCompType> = ({
  name,
  value
}: ParamCompType) => (
  <div className="param">
    <ListItem button divider>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>{`${value} [mg/l]`}</Typography>
        </Grid>
      </Grid>
    </ListItem>
  </div>
);

export default ParamComp;
