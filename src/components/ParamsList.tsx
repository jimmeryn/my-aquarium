import * as React from "react";
import { Param } from "../models";
import ParamButton from "./ParamButton";

// TODO: map on param list
const ParamList: React.FunctionComponent<{
  params: Param[];
  handleAddButton: () => void;
  handleParamClick: (label: string) => () => void;
}> = ({ params, handleAddButton, handleParamClick }) => (
  <div
    className="param-list"
    onClick={() => {
      handleAddButton();
    }}
  >
    {params.map(({ name, value }, index) => (
      <ParamButton
        className="param-value"
        name={name}
        value={value}
        key={index}
        onClick={() => handleParamClick(name)()}
      />
    ))}
  </div>
);

export default ParamList;
