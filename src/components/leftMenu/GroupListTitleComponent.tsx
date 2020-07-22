import * as React from "react";
import { Button } from "@material-ui/core";
import DividerComponent from "./DividerComponent";

const GroupListTitleComponent: React.FunctionComponent<{
  name?: string;
  index: number;
}> = ({ name, index }) => (
  <div>
    <DividerComponent />
    <Button className="group-list-title-button">
      <h3 className="group-list-title">{name ?? `Aquarium #${index + 1}`}</h3>
    </Button>
    <DividerComponent />
  </div>
);

export default GroupListTitleComponent;
