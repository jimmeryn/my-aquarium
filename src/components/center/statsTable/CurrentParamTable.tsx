import * as React from "react";
import RenderParamRows from "./RenderParamRows";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CurrentParamTable: React.FunctionComponent = () => (
  <div className="current-param-table">
    <Paper>
      <TableContainer>
        <Table stickyHeader size="small" aria-label="sticky dense table">
          <TableHead>
            <TableRow>
              <TableCell key={0}>Data</TableCell>
              <TableCell key={1}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={1} key={1}>
              <TableCell key={1}>10 June 2020</TableCell>
              <TableCell key={2}>123.12</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </div>
);

export default CurrentParamTable;
