import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

const TextInput: React.FunctionComponent<{ label: string; unit?: string }> = ({
  label,
  unit
}) => (
  <TextField
    label={label}
    id="standard-start-adornment"
    InputProps={{
      endAdornment: unit ? (
        <InputAdornment position="start">{`[${unit}]`}</InputAdornment>
      ) : null
    }}
  />
);

export default TextInput;
