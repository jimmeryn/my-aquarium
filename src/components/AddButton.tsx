import * as React from "react";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddButton: React.FunctionComponent<{
  className: string;
  name: string;
  value?: number | string;
  onClick?: any;
  active?: boolean;
}> = ({ className, onClick, name, value, active }) => (
  <ListItem divider dense>
    <ListItemText className={className} primary={name} secondary={value} />
    <Button>
      <AddIcon
        onClick={e => {
          e.preventDefault();
          if (onClick) onClick();
        }}
      />
    </Button>
  </ListItem>
);

export default AddButton;
