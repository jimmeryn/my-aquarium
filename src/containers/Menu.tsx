import * as React from "react";
import AquariumViewMenu from "./AquariumViewMenu";
import LandingPageMenu from "./LandingPageMenu";
import { useSelector } from "react-redux";
import { State } from "../store";

const Menu: React.FunctionComponent = () => {
  const { visibleAquarium, allaquariumsIds, aquariumsById } = useSelector(
    (state: State) => ({
      visibleAquarium: state.visibleAquarium,
      allaquariumsIds: state.aquariums.allaquariumsIds,
      aquariumsById: state.aquariums.aquariumsById
    })
  );

  return (
    <div className="menu">
      {visibleAquarium === -1 ? (
        <LandingPageMenu allaquariumsIds={allaquariumsIds} />
      ) : (
        <AquariumViewMenu aquarium={aquariumsById[visibleAquarium]} />
      )}
    </div>
  );
};

export default Menu;
