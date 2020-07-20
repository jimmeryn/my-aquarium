import * as React from "react";
import StatsView from "./StatsView";
import LandingPage from "./LandingPage";

const Center: React.FunctionComponent<{ isLandingPageOpen: boolean }> = ({
  isLandingPageOpen
}) => {
  return (
    <div className="center">
      {isLandingPageOpen ? <LandingPage /> : <StatsView />}
    </div>
  );
};

export default Center;
