import * as React from "react";
import { Param } from "../models";
import { List } from "@material-ui/core";
import ParamList from "./ParamsList";
import AddButton from "./AddButton";

const AquariumGroupList: React.FunctionComponent<{
  refill?: Param;
  params: Param[];
  onClick: () => void;
  addButtonClick: () => void;
  paramClick: (paramFilter: string) => () => void;
}> = ({ refill, params, onClick, paramClick, addButtonClick }) => (
  <List component="nav">
    <AddButton
      className="refill-value"
      name="Refill"
      value={refill ? `${refill.value} [l]` : "No refills"}
      onClick={() => addButtonClick()}
    />
    <AddButton
      className="param-value"
      name="Parameters"
      onClick={() => addButtonClick()}
    />
    <ParamList params={params} onClick={onClick} paramClick={paramClick} />
  </List>
);

export default AquariumGroupList;
