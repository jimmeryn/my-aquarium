import * as React from "react";
import FishBowl from "../../assets/fishbowl.svg";

const LandingPage: React.FunctionComponent = () => (
  <div className="landing-page">
    <div className="head">
      <h1>{"My Aquarium Application"}</h1>
      <h2>{"Collect and display data from your fish tanks"}</h2>
    </div>
    <FishBowl />
  </div>
);

export default LandingPage;
