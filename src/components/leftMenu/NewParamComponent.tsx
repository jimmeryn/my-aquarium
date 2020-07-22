import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const NewParamComp: React.FunctionComponent = () => (
  <ListItem divider dense>
    <ListItemText className="param-value" primary={"Parameters"} />
    <Button>
      <AddIcon />
    </Button>
  </ListItem>
);

export default NewParamComp;
