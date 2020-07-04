import * as React from "react";
import RefillComp from "./RefillComp";
import ParamList from "./ParamsList";
import List from "@material-ui/core/List";
import { Refill, Param } from "../../store/types";

type GroupComponentProps = {
  params: Param[];
  refill: Refill;
};

const GroupComponent: React.FunctionComponent<GroupComponentProps> = ({
  params,
  refill
}) => (
  <div>
    <List component="nav">
      <ParamList params={params} key={"params"} />
      <RefillComp latestRefill={refill} key={"refills"} />
    </List>
  </div>
);

export default GroupComponent;
