import * as React from "react";
import ParamButton from "./ParamButton";
import Tabs from "@material-ui/core/Tabs";

const RenderParamButtons: React.FunctionComponent<{
  paramNames: string[];
}> = ({ paramNames }) => (
  <div>
    <Tabs
      value={"tabs"}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {paramNames.map((paramName, i) => (
        <ParamButton paramName={paramName} index={i} />
      ))}
    </Tabs>
  </div>
);

export default RenderParamButtons;
