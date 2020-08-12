import * as React from "react";
import AquariumOverviewList from "../components/AquariumOverviewList";
import GroupButton from "../components/GroupButton";
import {
  ActionTypes,
  SET_VISIBLE_AQUARIUM,
  UIActionTypes,
  SET_MENU_STATE,
  SET_DIALOG_STATE,
  DialogVariant,
  REFILL,
  PARAMS,
  AQUARIUM,
  HIDDEN
} from "../actions";
import { useDispatch } from "react-redux";

const LandingPageMenu: React.FunctionComponent<{
  allaquariumsIds: number[];
}> = ({ allaquariumsIds }) => {
  const dispatch = useDispatch<React.Dispatch<ActionTypes | UIActionTypes>>();

  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });
  const setMenuStateDispatch = () => dispatch({ type: SET_MENU_STATE });
  const setDialogStateDispatch = (variant: DialogVariant) =>
    dispatch({ type: SET_DIALOG_STATE, variant });

  return (
    <React.Fragment>
      <GroupButton
        className={"title"}
        typography={"title-h1"}
        name={"My Aquarium"}
        onClick={() => {
          visibleAquariumDispatch(-1);
          setMenuStateDispatch();
          setDialogStateDispatch(HIDDEN);
        }}
      />
      {allaquariumsIds.map(i => (
        <AquariumOverviewList
          index={i}
          key={i}
          setVisibleAquariumIndex={visibleAquariumDispatch}
          setMenuActive={setMenuStateDispatch}
          setDialogHidden={() => setDialogStateDispatch(HIDDEN)}
          setDialogParams={() => setDialogStateDispatch(PARAMS)}
          setDialogRefill={() => setDialogStateDispatch(REFILL)}
        />
      ))}
      <GroupButton
        className="group-list-title-button"
        typography="group-list-title"
        name="Add Aquarium"
        dividers={true}
        onClick={() => setDialogStateDispatch(AQUARIUM)}
      />
    </React.Fragment>
  );
};

export default LandingPageMenu;
