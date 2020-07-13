import * as React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const GraphModifyButton: React.FunctionComponent<{ label: string }> = ({
  label
}) => (
  <BottomNavigationAction
    label={label}
    showLabel
    onClick={() => console.log("Clicked Graph modify button")}
  />
);

export default GraphModifyButton;
