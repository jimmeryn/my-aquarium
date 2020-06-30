import * as React from "react";
import ParamButton from "./ParamButton";
import Tabs from "@material-ui/core/Tabs";

const RenderParamButtons = () => (
  <div>
    <Tabs
      value={"tabs"}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
      <ParamButton />
    </Tabs>
  </div>
);

export default RenderParamButtons;
