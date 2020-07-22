import * as React from "react";
import { Button } from "@material-ui/core";
import DividerComponent from "./DividerComponent";

const AddAquariumButton: React.FunctionComponent = () => (
  <div>
    <DividerComponent />
    <Button className="group-list-title-button">
      <h3 className="group-list-title">{"Add Aquarium"}</h3>
    </Button>
    <DividerComponent />
  </div>
);

export default AddAquariumButton;
