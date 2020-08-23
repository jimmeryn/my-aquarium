import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";

const InputField: React.FunctionComponent<{
  label: string;
  unit?: string;
  value: number;
  handleInputChange: React.Dispatch<React.SetStateAction<number>>;
}> = ({ label, unit, value, handleInputChange }) => (
  <TextField
    label={label}
    value={value}
    onChange={e =>
      handleInputChange(e.target.value ? parseInt(e.target.value) : 0)
    }
    id="value-input"
    InputProps={{
      className: "text-field-input",
      endAdornment: unit ? (
        <InputAdornment position="start">{`[${unit}]`}</InputAdornment>
      ) : null,
    }}
  />
);

export default InputField;
