import * as React from "react";
import RenderParamButtons from "./RenderParamButtons";

const ParamButtonList: React.FunctionComponent = () => (
  <div className="param-button-list">{RenderParamButtons()}</div>
);

export default ParamButtonList;
