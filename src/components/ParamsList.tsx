import * as React from "react";
import { Param } from "../models";
import ParamButton from "./ParamButton";

// TODO: map on param list
const ParamList: React.FunctionComponent<{ params: Param[] }> = ({
  params
}) => (
  <div className="param-list">
    {params.map(({ name, value }, index) => (
      <ParamButton
        className="param-value"
        name={name}
        value={value}
        key={index}
      />
    ))}
  </div>
);

export default ParamList;
