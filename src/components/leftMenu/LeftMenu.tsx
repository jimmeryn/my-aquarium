import * as React from "react";
import GroupComponentList from "./GroupComponentList";

const LeftMenu: React.FunctionComponent = () => {
  return (
    <div className="left-menu">
      <GroupComponentList />
    </div>
  );
};

export default LeftMenu;
