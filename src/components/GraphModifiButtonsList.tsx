import * as React from "react";
import GraphModifyButton from "./GraphModifButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const GraphModifiButtonsList: React.FunctionComponent = () => (
  <div className="graph-modify-list">
    <BottomNavigation value={10}>
      {/** TODO: working buttons would be nice */}
      <GraphModifyButton label={"Show"} />
      <GraphModifyButton label={"Add"} />
    </BottomNavigation>
  </div>
);

export default GraphModifiButtonsList;
