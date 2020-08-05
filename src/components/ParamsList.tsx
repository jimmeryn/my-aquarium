import * as React from "react";
import { Param } from "../models";
import ParamButton from "./ParamButton";

// TODO: map on param list
  onClick: () => void;
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
      />
    ))}
  </div>
);

export default ParamList;
