import * as React from "react";
import RefillComp from "./RefillComp";
import ParamList from "./ParamsList";
import List from "@material-ui/core/List";
import { Refill, Param } from "../../store/types";

type GroupComponentProps = {
  params: Param[];
  refill: Refill;
  index: number;
};

const GroupComponent: React.FunctionComponent<GroupComponentProps> = ({
  params,
  refill,
  index
}) => (
  <div>
    <List component="nav">
      <ParamList params={params} key={`${index}paramList`} />
      <RefillComp latestRefill={refill} key={`${index}refills`} />
    </List>
  </div>
);

export default GroupComponent;
