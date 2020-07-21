import * as React from "react";
import { Button } from "@material-ui/core";

const Title: React.FunctionComponent<{
  changeLandingPageState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ changeLandingPageState }) => (
  <div className="title">
    <Button onClick={() => changeLandingPageState(true)}>
      <h1>My Aquarium</h1>
    </Button>
  </div>
);

export default Title;
