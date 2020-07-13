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
      {/** TODO: rename "current" to param/refil currently shown in the table */}
      <GraphModifyButton label={'Show "current" on the graph'} />
      <GraphModifyButton label={'Add "current" to the graph'} />
    </BottomNavigation>
  </div>
);

export default GraphModifyList;
