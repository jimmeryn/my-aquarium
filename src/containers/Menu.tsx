import * as React from "react";

import { useSelector } from "react-redux";
import { State } from "../store";

import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import Dialog from "./Dialog";

const classNames = require("classnames");

const Menu: React.FunctionComponent = () => {
  const {
    visibleAquarium,
    allaquariumsIds,
    aquariumsById,
    menuState
  } = useSelector((state: State) => ({
    visibleAquarium: state.visibleAquarium,
    allaquariumsIds: state.aquariums.allaquariumsIds,
    aquariumsById: state.aquariums.aquariumsById,
    menuState: state.userInterface.menu
  }));
  const menuClass = classNames({ menu: !menuState, "menu--active": menuState });

  return (
    <div className={menuClass}>
      {visibleAquarium === -1 ? (
        <LandingPageMenu allaquariumsIds={allaquariumsIds} />
      ) : (
        <AquariumViewMenu aquarium={aquariumsById[visibleAquarium]} />
      )}
      <Dialog title={"Add Value"} unit={"mg/l"} />
    </div>
  );
};

export default Menu;
