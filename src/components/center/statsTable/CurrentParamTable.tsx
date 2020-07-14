import * as React from "react";

import RenderTableBody from "./RenderTableBody";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { Aquarium } from "src/store/types";

// TODO: CurrentParamTable + CurrentParamFilteredTable
const CurrentParamTable: React.FunctionComponent<{
  aquarium: Aquarium;
  filter: string;
}> = ({ aquarium, filter }) => {
  const params = aquarium.params
    .filter(e => e.name.toLocaleLowerCase() === filter.toLowerCase())
    .reverse();

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
            {/** TODO: Add redux state for filtering current visiable param */}
            {RenderTableBody(params)}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default CurrentParamTable;
