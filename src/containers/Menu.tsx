import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";

import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import {
  UIActionTypes,
  SET_MENU_STATE,
  HIDDEN,
  AQUARIUM,
  REFILL,
  PARAMS,
} from "../actions";
import AddRefillDialog from "./AddRefillDialog";
import AddAquariumDialog from "./AddAquariumDialog";
import AddParamsDialog from "./AddParamsDialog";

const classNames = require("classnames");

const Menu: React.FunctionComponent = () => {
  const { visibleAquarium, menuState, dialogState } = useSelector(
    (state: State) => ({
      visibleAquarium: state.visibleAquarium,
      menuState: state.userInterface.menu,
      dialogState: state.userInterface.dialog,
    })
  );

  const menuClass = classNames({
    menu: window.innerWidth > 800 || !menuState,
    "menu--active": menuState,
  });

  const dispatch = useDispatch<React.Dispatch<UIActionTypes>>();
  const setMenuStateDispatch = () => dispatch({ type: SET_MENU_STATE });

  const handleMouseClick = (event: MouseEvent) => {
    const popover = document.getElementsByClassName("MuiPopover-root")[0];
    if (
      menuClass === "menu--active" &&
      !popover &&
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
      {(() => {
        switch (dialogState.variant) {
          case AQUARIUM:
            return <AddAquariumDialog />;
          case REFILL:
            return <AddRefillDialog />;
          case PARAMS:
            return <AddParamsDialog />;
          case HIDDEN:
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Menu;
