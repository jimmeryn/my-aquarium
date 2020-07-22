import * as React from "react";
import Title from "./Title";
import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
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
        <AquariumViewMenu aquarium={aquariumsById[visibleAquarium]} />
      ) : (
        <LandingPageMenu allaquariumsIds={allaquariumsIds} />
      )}
    </div>
  );
};

export default LeftMenu;
