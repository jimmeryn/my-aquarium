import * as React from "react";
import RefillComp from "./RefillComp";
import ParamList from "./ParamsList";
import NewParamComp from "./NewParamComp";
import List from "@material-ui/core/List";
import { Refill, Param } from "src/store/types";

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
      <RefillComp latestRefill={refill} />
      <NewParamComp />
      {/**TODO: Add new params button - opening dialog box where user can input date and values */}
      <ParamList params={params} />
    </List>
  </div>
);

export default GroupComponent;
