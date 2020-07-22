import * as React from "react";
import Title from "./Title";
import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import {
  ActionTypes,
  SET_VISIBLE_AQUARIUM
} from "../../store/types/actionTypes";
import { useDispatch } from "react-redux";
import { Aquarium } from "src/store/types";

const LeftMenu: React.FunctionComponent<{
  visibleAquarium: number;
  allaquariumsIds: number[];
  aquariumsById: {
    [id: number]: Aquarium;
  };
}> = ({ visibleAquarium, allaquariumsIds, aquariumsById }) => {
  const dispatch = useDispatch<React.Dispatch<ActionTypes>>();

  const visibleAquariumDispatch = (id: number) =>
    dispatch({ type: SET_VISIBLE_AQUARIUM, id });

  return (
    <div className="left-menu">
      <Title
        visibleAquariumDispatch={visibleAquariumDispatch}
        visibleAquarium={visibleAquarium}
      />
      {visibleAquarium !== -1 ? (
        <AquariumViewMenu aquarium={aquariumsById[visibleAquarium]} />
      ) : (
        <LandingPageMenu
          allaquariumsIds={allaquariumsIds}
          visibleAquariumDispatch={visibleAquariumDispatch}
        />
      )}
    </div>
  );
};

export default LeftMenu;
