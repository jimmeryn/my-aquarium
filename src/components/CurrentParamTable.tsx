import * as React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import ParamTableBody from "./ParamTableBody";
import { Param } from "../models";

const CurrentParamTable: React.FunctionComponent<{
  params: Param[];
}> = ({ params }) => {
  return (
    <div className="current-param-table">
      <TableContainer>
        <Table stickyHeader size="small" aria-label="sticky dense table">
          <TableHead>
            <TableRow>
              <TableCell key={0}>Data</TableCell>
              <TableCell key={1}>Value</TableCell>
            </TableRow>
          </TableHead>
          <ParamTableBody params={params} />
        </Table>
      </TableContainer>
    </div>
  );
};

export default CurrentParamTable;
