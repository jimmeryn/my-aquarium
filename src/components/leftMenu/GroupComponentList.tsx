import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "src/store";
import AquariumViewList from "./AquariumViewList";
import LandingPageList from "./LandingPageList";

const GroupComponentList: React.FunctionComponent<{
  isLandingPageOpen: boolean;
}> = ({ isLandingPageOpen }) => {
  const { allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => state.aquariums
  );
  return isLandingPageOpen ? (
    <LandingPageList allaquariumsIds={allaquariumsIds} />
  ) : (
    <AquariumViewList aquarium={aquariumsById[0]} />
  );
};

export default GroupComponentList;
