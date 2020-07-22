import * as React from "react";
import OverviewList from "./OverviewList";
import AddAquariumButton from "./AddAquariumButton";

const LandingPageMenu: React.FunctionComponent<{
  allaquariumsIds: number[];
  visibleAquariumDispatch: (id: number) => void;
}> = ({ allaquariumsIds, visibleAquariumDispatch }) => (
  <div>
    {allaquariumsIds.map(i => (
      <OverviewList
        index={i}
        key={i}
        visibleAquariumDispatch={visibleAquariumDispatch}
      />
    ))}
    <AddAquariumButton />
  </div>
);

export default LandingPageMenu;
