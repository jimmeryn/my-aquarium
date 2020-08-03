import * as React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const GraphModifyButton: React.FunctionComponent<{
  label: string;
  onClick: () => void;
}> = ({ label, onClick }) => (
  <BottomNavigationAction
    label={label}
    showLabel
    onClick={e => {
      e.preventDefault;
      onClick();
    }}
  />
);

export default GraphModifyButton;
