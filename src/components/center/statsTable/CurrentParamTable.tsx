import * as React from "react";
import RenderParamRows from "./RenderParamRows";

const CurrentParamTable: React.FunctionComponent = () => (
  <div className="current-param-table">{RenderParamRows()}</div>
);

export default CurrentParamTable;
