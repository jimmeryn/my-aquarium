import * as React from "react";
import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import { useSelector } from "react-redux";
import { State } from "../store";

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
  const { visibleAquarium, allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => ({
      visibleAquarium: state.visibleAquarium,
      allaquariumsIds: state.aquariums.allaquariumsIds,
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
    </div>
  );
};

export default Menu;
