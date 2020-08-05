import * as React from "react";
import AquariumOverviewList from "../components/AquariumOverviewList";
import GroupButton from "../components/GroupButton";
import {
  ActionTypes,
  SET_VISIBLE_AQUARIUM,
  MenuActionTypes,
  SET_MENU_STATE
} from "../actions";
import { useDispatch } from "react-redux";

const LandingPageMenu: React.FunctionComponent<{
  allaquariumsIds: number[];
}> = ({ allaquariumsIds }) => {
  const dispatch = useDispatch<React.Dispatch<ActionTypes>>();

  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });
  return (
    <React.Fragment>
      <GroupButton
        className={"title"}
        typography={"title-h1"}
        name={"My Aquarium"}
        onClick={() => {
          visibleAquariumDispatch(-1);
        }}
      />
      {allaquariumsIds.map(i => (
        <AquariumOverviewList
          index={i}
          key={i}
          visibleAquariumDispatch={visibleAquariumDispatch}
        />
      ))}
      <GroupButton
        className="group-list-title-button"
        typography="group-list-title"
        name="Add Aquarium"
        dividers={true}
      />
    </React.Fragment>
  );
};

export default LandingPageMenu;
