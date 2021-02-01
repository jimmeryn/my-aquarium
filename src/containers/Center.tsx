import * as React from "react";
import StatsView from "../containers/StatsView";
import LandingPage from "../components/LandingPage";
import { useSelector } from "react-redux";
import { State } from "../store";

const Center: React.FunctionComponent = () => {
  const { visibleAquarium } = useSelector((state: State) => state);
  // const state = useSelector((state: State) => state);
  // console.log(JSON.stringify(state));
  return (
    <div className="center">
      {visibleAquarium !== -1 ? <StatsView /> : <LandingPage />}
    </div>
  );
};

export default Center;
