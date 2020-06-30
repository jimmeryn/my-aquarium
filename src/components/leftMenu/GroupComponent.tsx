import * as React from "react";
import Refill from "./Refill";
import ParamList from "./ParamsList";
import List from "@material-ui/core/List";

const GroupComponent: React.FunctionComponent = () => (
  <div>
    <List component="nav">
      <ParamList />
      <Refill />
    </List>
  </div>
);

export default GroupComponent;
