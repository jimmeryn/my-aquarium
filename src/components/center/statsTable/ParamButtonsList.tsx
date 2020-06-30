import * as React from "react";
import RenderParamButtons from "./RenderParamButtons";
import AppBar from "@material-ui/core/AppBar";

const ParamButtonList: React.FunctionComponent = () => (
  <div className="param-button-list">
    <AppBar position="static" color="default">
      <RenderParamButtons />
    </AppBar>
  </div>
);

export default ParamButtonList;
