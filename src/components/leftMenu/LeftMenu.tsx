import * as React from "react";
import { useSelector } from "react-redux";
import { LeftMenuState } from "../../store";
import GroupComponent from "./GroupComponent";

const LeftMenu: React.FunctionComponent = () => {
  return (
    <div className="left-menu">
      <GroupComponent />
    </div>
  );
};

export default LeftMenu;
