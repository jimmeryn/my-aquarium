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
}> = ({ paramNames }) => {
  return (
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
                  defaultValue={0}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  InputProps={{
                    className: "dialog-table-cell",
                  disableUnderline: true,
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
