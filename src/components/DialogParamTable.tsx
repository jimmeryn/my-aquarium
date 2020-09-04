import * as React from "react";

import {
  TableBody,
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TextField,
  Button,
} from "@material-ui/core";

const handleSetInputValues = (
  inputValues: string[],
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>,
  i: number,
  event: { target: { value: string } }
) => {
  setInputValues(
    inputValues.map((value, idx) =>
      idx === i ? formatInputNumber(event.target.value) : value
    )
  );
};

const formatInputNumber = (value: string) => {
  if (value.length === 0 || value.match(/[^0-9]+\.|^\./)) return "0";
  if (value.match(/0+\./)) return value;
  if (value !== "0") return value.replace(/^0+/, "");
  return value;
};

const DialogParamTable: React.FunctionComponent<{
  paramNames: string[];
  inputValues: string[];
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ paramNames, inputValues, setInputValues }) => (
  <TableContainer className="new-param-table">
    <Table size={window.innerWidth < 800 ? "medium" : "small"}>
      <TableHead>
        <TableRow>
          <TableCell className="dialog-table-cell">{"Name"}</TableCell>
          <TableCell className="dialog-table-cell value">
            {"Value [mg/l]"}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {paramNames.map((paramName, i) => (
          <TableRow hover role="checkbox" tabIndex={i} key={i}>
            <TableCell key={1} className="dialog-table-cell">
              <Button>{paramName}</Button>
            </TableCell>
            <TableCell key={2} align="center" className="dialog-table-cell">
              <TextField
                id="number-input"
                value={inputValues[i]}
                onChange={(event: { target: { value: string } }) => {
                  handleSetInputValues(inputValues, setInputValues, i, event);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  className: "dialog-table-cell",
                  disableUnderline: true,
                }}
                onBlur={(event: { target: { value: string } }) => {
                  handleSetInputValues(inputValues, setInputValues, i, event);
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DialogParamTable;
