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

const DialogParamTable: React.FunctionComponent<{
  paramNames: string[];
  inputValues: number[];
  setInputValues: React.Dispatch<React.SetStateAction<number[]>>;
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
                  setInputValues(
                    inputValues.map((value, idx) =>
                      idx === i
                        ? event.target.value
                          ? parseInt(event.target.value)
                          : 0
                        : value
                    )
                  );
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  className: "dialog-table-cell",
                  disableUnderline: true,
                }}
                onBlur={(event: { target: { value: string } }) => {
                  setInputValues(
                    inputValues.map((value, idx) =>
                      idx === i
                        ? event.target.value
                          ? parseInt(event.target.value)
                          : 0
                        : value
                    )
                  );
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
