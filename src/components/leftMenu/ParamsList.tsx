import * as React from "react";
import ParamComp from "./Param";
import { Param } from "src/store/types";

// TODO: map on param list
type ParamListProps = {
  params: Param[];
};
const ParamList: React.FunctionComponent<ParamListProps> = ({ params }) => (
  <div className="param-list">
    {params.map(({ name, value }, index) => (
      <ParamComp name={name} value={value} index={index} />
    ))}
  </div>
);

export default ParamList;
