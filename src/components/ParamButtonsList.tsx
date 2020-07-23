import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      minWidth: 100,
      width: 100
    }
  })
);

const RenderParamButtons: React.FunctionComponent<{
  paramNames: string[];
}> = ({ paramNames }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="parameters tabs"
    >
      {paramNames.map((paramName, i) => (
        <Tab className={useStyles().tab} label={paramName} key={i} />
      ))}
    </Tabs>
  );
};

export default RenderParamButtons;
