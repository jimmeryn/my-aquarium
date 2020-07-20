import * as React from "react";
import GroupComponentList from "./GroupComponentList";
import Title from "./Title";

const LeftMenu: React.FunctionComponent<{ isLandingPageOpen: boolean }> = ({
  isLandingPageOpen
}) => (
  <div className="left-menu">
    <Title />
    <GroupComponentList />
  </div>
);

export default LeftMenu;
