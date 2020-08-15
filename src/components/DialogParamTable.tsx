import * as React from "react";

import {
  TableBody,
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TextField
} from "@material-ui/core";

const DialogParamTable: React.FunctionComponent<{
  paramNames: string[];
}> = ({ paramNames }) => {
  return (
    <TableContainer className={"new-param-table"}>
      <Table size={window.innerWidth < 800 ? "medium" : "small"}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Value [mg/l]</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paramNames.map((paramName, i) => (
            <TableRow hover role="checkbox" tabIndex={i} key={i}>
              <TableCell key={1}>{paramName}</TableCell>
              <TableCell key={2}>
                <TextField
                  id="standard-number"
                  type="number"
                  defaultValue={0}
                  margin="dense"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DialogParamTable;
