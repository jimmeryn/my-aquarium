import * as React from "react";
import ParamList from "./ParamsList";
import Refill from "./Refill";

const RenderGroupComponent = (aquariumIndex: number) => (
  <div className="group-component">
    <ParamList />
    <Refill />
  </div>
);

export default RenderGroupComponent;
