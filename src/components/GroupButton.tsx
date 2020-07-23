import * as React from "react";
import { Button } from "@material-ui/core";
import Divider from "./Divider";

const GroupButton: React.FunctionComponent<{
  className: string;
  name: string;
  dividers?: boolean;
  typography?: string;
  onClick?: any;
  active?: boolean;
}> = ({ className, typography, onClick, name, dividers = false, active }) => (
  <div>
    {dividers ? <Divider /> : null}
    <div className={className}>
      <Button
        onClick={e => {
          e.preventDefault();
          if (onClick) onClick();
        }}
      >
        <div className={typography}>{name}</div>
      </Button>
    </div>
    {dividers ? <Divider /> : null}
  </div>
);

export default GroupButton;
