import * as React from "react";
import { TextField, InputAdornment, withStyles } from "@material-ui/core";

const styles = {
  input: {
    color: "white"
  }
};

const TextInput: React.FunctionComponent<{
  label: string;
  unit?: string;
  classes: {
    input: string;
  };
}> = ({ label, unit, classes }) => (
  <TextField
    label={label}
    id="value-input"
    defaultValue={10}
    InputProps={{
      className: classes.input,
      endAdornment: unit ? (
        <InputAdornment position="start">{`[${unit}]`}</InputAdornment>
      ) : null
    }}
  />
);

export default withStyles(styles)(TextInput);
