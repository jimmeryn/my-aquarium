import * as React from "react";
import { useSelector } from "react-redux";

import RenderTableBody from "./RenderTableBody";
import { State } from "../../../store";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

const CurrentParamTable: React.FunctionComponent = () => {
  const { aquariumsById } = useSelector((state: State) => state.aquariums);
  const filterName = "no3";
  const params = aquariumsById[0].params
    .filter(e => e.name.toLocaleLowerCase() === filterName.toLowerCase())
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
