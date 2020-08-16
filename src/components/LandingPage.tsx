import * as React from "react";
import FishBowlComponent from "./FishBowlComponent";

const LandingPage: React.FunctionComponent = () => (
  <div className="landing-page">
    <div className="head">
      <h1>{"My Aquarium Application"}</h1>
      <h2>{"Collect and display data"}</h2>
      <h2>{"from your fish tanks"}</h2>
    </div>
    <FishBowlComponent />
  </div>
);

export default LandingPage;
