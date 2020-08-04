import * as React from "react";
import { Param } from "../models";
import { List } from "@material-ui/core";
import ParamList from "../components/ParamsList";
import AddButton from "../components/AddButton";

const AquariumGroupList: React.FunctionComponent<{
  refill?: Param;
  params: Param[];
}> = ({ refill, params }) => (
  <List component="nav">
    <AddButton
      className="refill-value"
      name="Refill"
      value={refill ? `${refill.value} [l]` : "No refills"}
    />
    <AddButton className="param-value" name="Parameters" />
    <ParamList params={params} />
  </List>
);

export default AquariumGroupList;
