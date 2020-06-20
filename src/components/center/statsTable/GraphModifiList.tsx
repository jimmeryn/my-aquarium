import * as React from "react";
import GraphModifyButton from "./GraphModifButton";

const GraphModifyList: React.FunctionComponent = () => (
  <div className="graph-modify-list">
    <GraphModifyButton />
    <GraphModifyButton />
  </div>
);

export default GraphModifyList;
