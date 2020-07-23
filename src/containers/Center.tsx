import * as React from "react";
import StatsView from "../components/StatsView";
import LandingPage from "../components/LandingPage";
import { useSelector } from "react-redux";
import { State } from "../store";

const Center: React.FunctionComponent = () => {
  const { visibleAquarium } = useSelector((state: State) => state);

  return (
    <div className="center">
      {visibleAquarium !== -1 ? <StatsView /> : <LandingPage />}
    </div>
  );
};

export default Center;
