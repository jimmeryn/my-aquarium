import * as React from "react";
import Row from "./Row";
import { Param } from "src/models";
import { TableBody } from "@material-ui/core";

const renderTableBody = (params: Param[]) => (
  <TableBody>
    {params.map(e => (
      <Row
        date={e.date.toISOString().split("T")[0]}
        value={e.value}
        key={e.id}
      />
    ))}
  </TableBody>
);

export default renderTableBody;
