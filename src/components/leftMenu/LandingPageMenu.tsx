import * as React from "react";
import OverviewList from "./OverviewList";
import AddAquariumButton from "./AddAquariumButton";

const LandingPageMenu: React.FunctionComponent<{
  allaquariumsIds: number[];
}> = ({ allaquariumsIds }) => (
  <div>
    {allaquariumsIds.map(i => (
      <OverviewList index={i} key={i} />
    ))}
    <AddAquariumButton />
  </div>
);

export default LandingPageMenu;
