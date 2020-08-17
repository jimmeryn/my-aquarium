import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

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
      className: "text-field-input",
      endAdornment: unit ? (
        <InputAdornment position="start">{`[${unit}]`}</InputAdornment>
      ) : null
    }}
  />
);

export default TextInput;
