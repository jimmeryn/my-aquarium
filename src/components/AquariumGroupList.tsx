import * as React from "react";
import { Param } from "../models";
import { List } from "@material-ui/core";
import ParamList from "./ParamsList";
import AddButton from "./AddButton";

const AquariumGroupList: React.FunctionComponent<{
  refill?: Param;
  params: Param[];
  handleCloseMenu: () => void;
  handleAddParamClick: () => void;
  handleRefillClick: () => void;
  handleParamClick: (paramFilter: string) => () => void;
}> = ({
  refill,
  params,
  handleCloseMenu,
  handleParamClick,
  handleAddParamClick,
  handleRefillClick,
}) => (
  <List component="nav">
    <AddButton
      className="refill-value"
      name="Refill"
      value={refill ? `${refill.value} [l]` : "No refills"}
      onClick={handleRefillClick}
    />
    <AddButton
      className="param-value"
      name="Parameters"
      onClick={handleAddParamClick}
    />
    <ParamList
      params={params}
      handleCloseMenu={handleCloseMenu}
      handleParamClick={handleParamClick}
    />
  </List>
);

export default AquariumGroupList;
