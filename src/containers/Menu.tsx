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
    "menu--active": menuState,
  });

  const dispatch = useDispatch<React.Dispatch<UIActionTypes>>();
  const setMenuStateDispatch = () => dispatch({ type: SET_MENU_STATE });

  const handleMouseClick = (event: MouseEvent) => {
    if (
      menuClass === "menu--active" &&
      !document
        .getElementsByClassName("menu--active")[0]
        .contains(event.target as Node)
    ) {
      setMenuStateDispatch();
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseClick);
    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, [handleMouseClick]);

  return (
    <div className={menuClass}>
      {visibleAquarium === -1 ? <LandingPageMenu /> : <AquariumViewMenu />}
      <Dialog />
    </div>
  );
};

export default Menu;
