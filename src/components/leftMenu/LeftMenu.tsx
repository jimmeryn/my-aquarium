import * as React from "react";
import GroupComponentList from "./GroupComponentList";
import Title from "./Title";

const LeftMenu: React.FunctionComponent<{
  isLandingPageOpen: boolean;
  changeLandingPageState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLandingPageOpen, changeLandingPageState }) => (
  <div className="left-menu">
    <Title changeLandingPageState={changeLandingPageState} />
    <GroupComponentList isLandingPageOpen={isLandingPageOpen} />
  </div>
);

export default LeftMenu;
