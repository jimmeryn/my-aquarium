import * as React from "react";
import Title from "./Title";
import AquariumViewList from "./AquariumViewList";
import LandingPageList from "./LandingPageList";
import { useSelector } from "react-redux";
import { State } from "src/store";

const LeftMenu: React.FunctionComponent<{
  isLandingPageOpen: boolean;
  changeLandingPageState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLandingPageOpen, changeLandingPageState }) => {
  const { allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => state.aquariums
  );
  return (
    <div className="left-menu">
      <Title changeLandingPageState={changeLandingPageState} />
      {isLandingPageOpen ? (
        <LandingPageList allaquariumsIds={allaquariumsIds} />
      ) : (
        <AquariumViewList aquarium={aquariumsById[0]} />
      )}
    </div>
  );
};

export default LeftMenu;
