import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../store";
import { SET_MENU_STATE, MenuActionTypes } from "../actions";

import Hamburger from "../components/Hamburger";

const HamburgerActive = () => {
  const { menuState } = useSelector((state: State) => ({
    menuState: state.menu
  }));

  const dispatch = useDispatch<React.Dispatch<MenuActionTypes>>();
  const setMenuStateDispatch = () => dispatch({ type: SET_MENU_STATE });
  return <Hamburger active={menuState} setActive={setMenuStateDispatch} />;
};

export default HamburgerActive;
