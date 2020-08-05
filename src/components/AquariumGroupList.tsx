import * as React from "react";
import { Param } from "../models";
import { List } from "@material-ui/core";
import ParamList from "./ParamsList";
import AddButton from "./AddButton";

const AquariumGroupList: React.FunctionComponent<{
  refill?: Param;
  params: Param[];
  onClick: () => void;
  paramClick: (paramFilter: string) => () => void;
}> = ({ refill, params, onClick, paramClick }) => (
  <List component="nav">
    <AddButton
      className="refill-value"
      name="Refill"
      value={refill ? `${refill.value} [l]` : "No refills"}
    />
    <AddButton className="param-value" name="Parameters" />
    <ParamList params={params} onClick={onClick} paramClick={paramClick} />
  </List>
);

export default AquariumGroupList;
