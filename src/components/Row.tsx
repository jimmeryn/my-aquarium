import * as React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Row: React.FunctionComponent<{ date: string; value: number }> = ({
  date,
  value
}) => (
  <TableRow hover role="checkbox" tabIndex={1} key={1}>
    <TableCell key={1}>{date}</TableCell>
    <TableCell key={2}>{value}</TableCell>
  </TableRow>
);

export default Row;
