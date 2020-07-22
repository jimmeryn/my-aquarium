import * as React from "react";
import { Button } from "@material-ui/core";

// TODO: onClick
const OverviewComponent: React.FunctionComponent<{ label: string }> = ({
  label
}) => <Button className="overview-component">{label}</Button>;

export default OverviewComponent;
