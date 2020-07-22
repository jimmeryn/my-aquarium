import * as React from "react";
import DividerComponent from "./DividerComponent";

const GroupListTitleComponent: React.FunctionComponent<{
  name?: string;
  index: number;
}> = ({ name, index }) => (
  <div>
    <DividerComponent />
    <h3 className="group-list-title">{name ?? `Aquarium #${index + 1}`}</h3>
    <DividerComponent />
  </div>
);

export default GroupListTitleComponent;
