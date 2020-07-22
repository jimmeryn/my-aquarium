import * as React from "react";

import { List } from "@material-ui/core";
import { Param, Refill } from "src/store/types";

import RefillComp from "./RefillComponent";
import NewParamComp from "./NewParamComponent";
import ParamList from "./ParamsList";

const GroupList: React.FunctionComponent<{
  refill: Refill;
  params: Param[];
}> = ({ refill, params }) => (
  <List component="nav">
    <RefillComp latestRefill={refill} />
    <NewParamComp />
    {/** TODO: Add new params button - opening dialog box where user can input date and values */}
    <ParamList params={params} />
  </List>
);

export default GroupList;
