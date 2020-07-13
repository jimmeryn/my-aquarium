import * as React from "react";
import GraphModifyButton from "./GraphModifButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const GraphModifyList: React.FunctionComponent = () => (
  <div className="graph-modify-list">
    <BottomNavigation
      value={10}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
    >
      <GraphModifyButton label={"Show current"} />
      <GraphModifyButton label={"Add current"} />
    </BottomNavigation>
  </div>
);

export default GraphModifyList;
