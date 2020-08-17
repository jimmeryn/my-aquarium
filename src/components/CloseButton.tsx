import * as React from "react";
import { DialogVariant } from "src/actions";

const CloseButton: React.FunctionComponent<{
  handleClick: (variant?: DialogVariant) => void;
}> = ({ handleClick }) => (
  <a
    className="close-button"
    onClick={() => {
      handleClick();
    }}
  ></a>
);

export default CloseButton;
