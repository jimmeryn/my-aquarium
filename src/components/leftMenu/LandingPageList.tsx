import * as React from "react";
import AquariumOverviewComponent from "./AquariumOverviewComponent";

const LandingPageList: React.FunctionComponent<{
  allaquariumsIds: number[];
}> = ({ allaquariumsIds }) => (
  <div>
    {allaquariumsIds.map(i => (
      <AquariumOverviewComponent index={i} key={i} />
    ))}
  </div>
);

export default LandingPageList;
