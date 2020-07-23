import * as React from "react";

const DialogComponent: React.FunctionComponent<{
  isDialogOpen: boolean;
}> = ({ isDialogOpen }) => {
  const dialogClassName = isDialogOpen ? "dialog" : "dialog-hidden";
  return <div className={dialogClassName}></div>;
};

export default DialogComponent;
