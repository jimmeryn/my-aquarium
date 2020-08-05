import * as React from "react";
import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import { useSelector } from "react-redux";
import { State } from "../store";

const classNames = require("classnames");

const Menu: React.FunctionComponent = () => {
  const { visibleAquarium, allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => ({
      visibleAquarium: state.visibleAquarium,
      allaquariumsIds: state.aquariums.allaquariumsIds,
  const menuClass = classNames({ menu: !menuState, "menu--active": menuState });

  return (
    <div className={menuClass} ref={wrapperRef}>
      {visibleAquarium === -1 ? (
        <LandingPageMenu allaquariumsIds={allaquariumsIds} />
      ) : (
        <AquariumViewMenu aquarium={aquariumsById[visibleAquarium]} />
      )}
    </div>
  );
};

export default Menu;
