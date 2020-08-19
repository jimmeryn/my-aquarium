import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";

import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import Dialog from "./Dialog";
import { UIActionTypes, SET_MENU_STATE } from "../actions";

const classNames = require("classnames");

const Menu: React.FunctionComponent = () => {
  const { visibleAquarium, menuState } = useSelector((state: State) => ({
    visibleAquarium: state.visibleAquarium,
    menuState: state.userInterface.menu
  }));

  const menuClass = classNames({
    menu: window.innerWidth > 800 || !menuState,
    "menu--active": menuState
  });

  return (
    <div className={menuClass}>
      {visibleAquarium === -1 ? <LandingPageMenu /> : <AquariumViewMenu />}
      <Dialog />
    </div>
  );
};

export default Menu;
