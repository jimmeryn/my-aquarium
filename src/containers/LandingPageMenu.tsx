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
  HIDDEN,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store";

const LandingPageMenu: React.FunctionComponent = () => {
  const allAquariumsIds = useSelector((state: State) => state.aquariums.allIds);

  const dispatch = useDispatch<React.Dispatch<ActionTypes | UIActionTypes>>();

  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });
  const setMenuStateDispatch = () => dispatch({ type: SET_MENU_STATE });
  const setDialogStateDispatch = (variant: DialogVariant, aquariumId = -1) =>
    dispatch({ type: SET_DIALOG_STATE, variant, aquariumId });

  return (
    <React.Fragment>
      <GroupButton
        className={"title"}
        typography={"title-h1"}
        name={"My Aquarium"}
        handleButtonClick={() => {
          visibleAquariumDispatch(-1);
          setMenuStateDispatch();
          setDialogStateDispatch(HIDDEN);
        }}
      />
      {allAquariumsIds.map(i => (
        <AquariumOverviewList
          index={i}
          key={i}
          setVisibleAquariumIndex={visibleAquariumDispatch}
          setMenuActive={setMenuStateDispatch}
          setDialogHidden={() => setDialogStateDispatch(HIDDEN)}
          setDialogParams={() => setDialogStateDispatch(PARAMS, i)}
          setDialogRefill={() => setDialogStateDispatch(REFILL, i)}
        />
      ))}
      <GroupButton
        className="group-list-title-button"
        typography="group-list-title"
        name="Add Aquarium"
        dividers={true}
        handleButtonClick={() => {
          setDialogStateDispatch(AQUARIUM);
        }}
      />
    </React.Fragment>
  );
};

export default LandingPageMenu;
