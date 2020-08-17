import * as React from "react";
import { Param } from "../models";
import ParamButton from "./ParamButton";

// TODO: map on param list
const ParamList: React.FunctionComponent<{
  params: Param[];
  handleCloseMenu: () => void;
  handleParamClick: (label: string) => () => void;
}> = ({ params, handleCloseMenu, handleParamClick }) => (
  <div
    className="param-list"
    onClick={() => {
      handleCloseMenu();
    }}
  >
    {params.map(({ name, value }, index) => (
      <ParamButton
        className="param-value"
        name={name}
        value={value}
        key={index}
        handleParamClick={handleParamClick(name)}
      />
    ))}
  </div>
);

export default ParamList;
