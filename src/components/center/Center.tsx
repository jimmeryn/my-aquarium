import * as React from "react";
import StatsView from "./StatsView";
import LandingPage from "./LandingPage";

const Center: React.FunctionComponent<{ visibleAquarium: number }> = ({
  visibleAquarium
}) => {
  return (
    <div className="center">
      {visibleAquarium !== -1 ? <StatsView /> : <LandingPage />}
    </div>
  );
};

export default Center;
