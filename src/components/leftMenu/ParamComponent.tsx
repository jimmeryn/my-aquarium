import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";

type ParamComponentType = {
  name: string;
  value: number;
  index: number;
};

const ParamComponent: React.FunctionComponent<ParamComponentType> = ({
  name,
  value,
  index
}: ParamComponentType) => (
  <ListItem button divider key={index}>
    <ListItemText className="param-value" primary={name} />
    <ListItemText className="param-value" secondary={`${value}[mg/l]`} />
  </ListItem>
);

export default ParamComponent;
