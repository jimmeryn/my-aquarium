import * as React from "react";
import ParamComponent from "./ParamComponent";
import { Param } from "src/store/types";

// TODO: map on param list
type ParamListProps = {
  params: Param[];
};

const ParamList: React.FunctionComponent<ParamListProps> = ({ params }) => (
  <div className="param-list">
    {params.map(({ name, value }, index) => (
      <ParamComponent name={name} value={value} index={index} />
    ))}
  </div>
);

export default ParamList;
