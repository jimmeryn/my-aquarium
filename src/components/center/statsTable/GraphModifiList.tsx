import * as React from "react";
import GraphModifyButton from "./GraphModifButton";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const GraphModifyList: React.FunctionComponent = () => (
  <div className="graph-modify-list">
    {/* <GraphModifyButton />
    <GraphModifyButton /> */}
    <BottomNavigation
      value={10}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      showLabels
    >
      <BottomNavigationAction label="Show current" />
      <BottomNavigationAction label="Add current" />
    </BottomNavigation>
  </div>
);

export default GraphModifyList;
