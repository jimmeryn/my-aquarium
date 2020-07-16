import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";

type ParamCompType = {
  name: string;
  value: number;
  index: number;
};

const ParamComp: React.FunctionComponent<ParamCompType> = ({
  name,
  value,
  index
}: ParamCompType) => (
  <ListItem button divider key={index} dense>
    <ListItemText primary={name} secondary={`${value}[mg/l]`} />
  </ListItem>
);

export default ParamComp;