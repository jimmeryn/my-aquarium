import * as React from "react";

import {
  TableBody,
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableHead
} from "@material-ui/core";

const ParamTableInput = () => {
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
          <TableRow hover role="checkbox" tabIndex={1} key={1}>
            <TableCell key={1}>{"Cl2"}</TableCell>
            <TableCell key={2}>{0}</TableCell>
          </TableRow>
          <TableRow hover role="checkbox" tabIndex={2} key={2}>
            <TableCell key={1}>{"pH"}</TableCell>
            <TableCell key={2}>{6.2}</TableCell>
          </TableRow>
          <TableRow hover role="checkbox" tabIndex={3} key={3}>
            <TableCell key={1}>{"KH"}</TableCell>
            <TableCell key={2}>{4}</TableCell>
          </TableRow>
          <TableRow hover role="checkbox" tabIndex={4} key={4}>
            <TableCell key={1}>{"GH"}</TableCell>
            <TableCell key={2}>{11}</TableCell>
          </TableRow>
          <TableRow hover role="checkbox" tabIndex={5} key={5}>
            <TableCell key={1}>{"NO2"}</TableCell>
            <TableCell key={2}>{0.1}</TableCell>
          </TableRow>
          <TableRow hover role="checkbox" tabIndex={6} key={6}>
            <TableCell key={1}>{"NO3"}</TableCell>
            <TableCell key={2}>{150}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParamTableInput;
