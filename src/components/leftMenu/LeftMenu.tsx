import * as React from "react";
import Title from "./Title";
import AquariumViewList from "./AquariumViewList";
import LandingPageList from "./LandingPageList";
import { Aquarium } from "src/store/types";

const LeftMenu: React.FunctionComponent<{
  visibleAquarium: number;
  allaquariumsIds: number[];
  aquariumsById: {
    [id: number]: Aquarium;
  };
}> = ({ visibleAquarium, allaquariumsIds, aquariumsById }) => {
  return (
    <div className="left-menu">
      <Title />
      {visibleAquarium !== -1 ? (
        <AquariumViewList aquarium={aquariumsById[visibleAquarium]} />
      ) : (
        <LandingPageList allaquariumsIds={allaquariumsIds} />
      )}
    </div>
  );
};

export default LeftMenu;
