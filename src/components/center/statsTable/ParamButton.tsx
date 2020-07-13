import * as React from "react";
import Tab from "@material-ui/core/Tab";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      minWidth: 100,
      width: 100
    }
  })
);
const ParamButton: React.FunctionComponent<{
  paramName: string;
  index: number;
}> = ({ paramName, index }) => (
  <div className="param-button">
    <Tab className={useStyles().tab} label={paramName} key={index} />
  </div>
);

export default ParamButton;
