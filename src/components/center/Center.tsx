import * as React from "react";
import StatsView from "./StatsView";
import WelcomePage from "./WelcomePage";
const Center: React.FunctionComponent = () => {
  return (
    <div className="center">{false ? <WelcomePage /> : <StatsView />}</div>
  );
};

export default Center;
