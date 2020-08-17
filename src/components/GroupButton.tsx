import * as React from "react";
import { Button } from "@material-ui/core";
import Divider from "./Divider";

const GroupButton: React.FunctionComponent<{
  className: string;
  name: string;
  dividers?: boolean;
  typography?: string;
  onClick?: () => void;
}> = ({ className, name, dividers = false, typography, onClick }) => (
  <React.Fragment>
    {dividers ? <Divider /> : null}
    <div className={className}>
      <Button
        onClick={e => {
          e.preventDefault();
          if (onClick) onClick();
        }}
        classes={{ label: typography }}
      >
        <div className={typography}>{name}</div>
      </Button>
    </div>
    {dividers ? <Divider /> : null}
  </React.Fragment>
);

export default GroupButton;
