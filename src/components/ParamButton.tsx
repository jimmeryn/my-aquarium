import * as React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ParamButton: React.FunctionComponent<{
  className: string;
  name: string;
  value: number | undefined;
  onClick?: any;
  active?: boolean;
}> = ({ className, name, value, onClick }) => (
  <ListItem button divider onClick={() => onClick(name)}>
    <ListItemText className={className} primary={name} />
    <ListItemText
      className={className}
      secondary={value != null ? `${value}[mg/l]` : `No value defined`}
    />
  </ListItem>
);

export default ParamButton;
