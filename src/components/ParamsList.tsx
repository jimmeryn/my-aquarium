import * as React from "react";
import { Param } from "../models";
import ParamButton from "./ParamButton";

// TODO: map on param list
const ParamList: React.FunctionComponent<{
  params: Param[];
  onClick: () => void;
  paramClick: (label: string) => () => void;
}> = ({ params, onClick, paramClick }) => (
  <div
    className="param-list"
    onClick={() => {
      onClick();
    }}
  >
    {params.map(({ name, value }, index) => (
      <ParamButton
        className="param-value"
        name={name}
        value={value}
        key={index}
        onClick={() => paramClick(name)()}
      />
    ))}
  </div>
);

export default ParamList;
