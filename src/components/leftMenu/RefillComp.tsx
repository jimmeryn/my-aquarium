import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import { Refill } from "src/store/types";
import { ListItemText, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

type RefillProps = {
  latestRefill: Refill | undefined;
};

const RefillComp: React.FunctionComponent<RefillProps> = ({ latestRefill }) => (
  <ListItem divider>
    <ListItemText
      primary={"Refill"}
      secondary={latestRefill ? `${latestRefill.value} [l]` : "No refills"}
    />
    <Button>
      <AddIcon />
    </Button>
  </ListItem>
);

export default RefillComp;
