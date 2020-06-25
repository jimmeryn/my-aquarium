import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "../../store";
import GroupComponent from "./GroupComponent";

const LeftMenu: React.FunctionComponent = () => {
  const dataElement = useSelector((state: State) => state.reducer);
  return (
    <div className="left-menu">
      <GroupComponent aquariums={dataElement} />
    </div>
  );
};

export default LeftMenu;
