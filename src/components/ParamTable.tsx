import * as React from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import ParamTableBody from "./ParamTableBody";
import { Aquarium, Param, Refill } from "../models";

// TODO: CurrentParamTable + CurrentParamFilteredTable
const CurrentParamTable: React.FunctionComponent<{
  aquarium: Aquarium;
  filter: string;
}> = ({ aquarium, filter }) => {
  const params =
    filter !== "refills"
      ? aquarium.params
          .filter(e => e.name.toLocaleLowerCase() === filter.toLowerCase())
          .reverse()
      : aquarium.refills;

  return (
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
            {/** TODO: I have no idea how this works... foud it on stackoverflow*/}
            <ParamTableBody params={params as Param[] & Refill[]} />
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default CurrentParamTable;
