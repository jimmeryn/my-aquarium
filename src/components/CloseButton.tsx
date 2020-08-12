import * as React from "react";

const CloseButton = (child: any) => (
  <a
    className="close-button"
    onClick={() => {
      child.onClick();
    }}
  ></a>
);

export default CloseButton;
