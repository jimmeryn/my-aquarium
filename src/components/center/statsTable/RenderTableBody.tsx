import * as React from "react";
import Row from "./Row";
import { Param } from "src/store/types";
import { TableBody } from "@material-ui/core";

const RenderTableBody = (params: Param[]) => (
  <TableBody>
    {params.map(e => (
      <Row date={e.date.toISOString().split("T")[0]} value={e.value} />
    ))}
  </TableBody>
);

export default RenderTableBody;
