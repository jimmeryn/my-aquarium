import * as React from "react";
import { useSelector } from "react-redux";
import { LeftMenuState } from "../../store";
import GroupComponent from "./GroupComponent";

const LeftMenu: React.FunctionComponent = () => {
  const dataElement = useSelector(
    (state: LeftMenuState) => state.reducer.aquariums
  );

  return <div className="NavBar-left">{/* <GroupComponent /> */}</div>;
};

export default LeftMenu;
