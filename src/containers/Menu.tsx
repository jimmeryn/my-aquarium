import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { UIActionTypes, SET_MENU_STATE } from "../actions";

import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import Dialog from "./Dialog";

const classNames = require("classnames");

function useOutsideClick(
  ref: React.MutableRefObject<any>,
  menuState: boolean,
  setMenuState: () => void
) {
  React.useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target) && menuState) {
        setMenuState();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, menuState]);
}

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

  const dispatchMenu = useDispatch<React.Dispatch<UIActionTypes>>();
  const setMenuStateDispatch = () => dispatchMenu({ type: SET_MENU_STATE });

  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, menuState, setMenuStateDispatch);

  const menuClass = classNames({ menu: !menuState, "menu--active": menuState });

  return (
    <div className={menuClass} ref={wrapperRef}>
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
