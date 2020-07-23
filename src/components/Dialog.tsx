import * as React from "react";

const Dialog: React.FunctionComponent<{
  isDialogOpen: boolean;
}> = ({ isDialogOpen }) => (
  <div className={isDialogOpen ? "dialog" : "dialog-hidden"}></div>
);

export default Dialog;
