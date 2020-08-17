import * as React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ParamButton: React.FunctionComponent<{
  className: string;
  name: string;
  value: number | undefined;
  active?: boolean;
  handleParamClick?: () => void;
}> = ({ className, name, value, handleParamClick }) => (
  <ListItem button divider onClick={() => handleParamClick()}>
    <ListItemText className={className} primary={name} />
    <ListItemText
      className={className}
      secondary={value != null ? `${value}[mg/l]` : `No value defined`}
    />
  </ListItem>
);

export default ParamButton;
