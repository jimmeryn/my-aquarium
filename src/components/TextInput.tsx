import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

const TextInput: React.FunctionComponent<{
  label: string;
  unit?: string;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}> = ({ label, unit, value, onChange }) => (
  <TextField
    label={label}
    value={value}
    onChange={e => onChange(e.target.value ? parseInt(e.target.value) : 0)}
    id="value-input"
    InputProps={{
      className: "text-field-input",
      endAdornment: unit ? (
        <InputAdornment position="start">{`[${unit}]`}</InputAdornment>
      ) : null,
    }}
  />
);

export default TextInput;
